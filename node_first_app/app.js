const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// 사용자를 요청에 저장함으로써 앱 내부 어디서든지 편하게 사용하기위해 미들웨어 등록
// app.listen을 통해 서버를 성공적으로 시작했을 때만 접근 가능
app.use((req, res, next) => {
  User.findByPk(1)
  .then(user => {
    req.user= user;
    next();
  })
  .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// 위에서 모델을 임포트해서 sequelize와 연 관지어줌
Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' }); // 사용자를 삭제하면 사용자에 관련된 정보도 사라짐
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize                         // sequelize 동기화
  // .sync({ force: true })       // 새로운 코드 db에 적용시키기 (매번 데이터가 사라지니까 주석처리)
  .sync()
  .then(result => {               // sync는 모든 모델을 불러옴
    return User.findByPk(1);
    // console.log(result);
    })
  .then(user => {
    if (!user) {                  // 사용자가 없다면 만들어라
      return User.create({ name: 'Jisoo', email: 'Jisoo@test.com' }); // 더미 데이터
    }
    return Promise.resolve(user); // 프로미스나 객체중 하나를 반환함. 항상 동일한 값을 반환해야하기때문에 resolve를 사용
    return user;
  })
  .then(user => {                 // 위에 then 블록값이 새 promise에 포함돼서 여기에선 자동으로 관리됨
    // console.log(user);
    return user.createCart();
  
  })
  .then(cart => {
    app.listen(3000);
  })                         
  .catch(err => {
    console.log(err);
  });