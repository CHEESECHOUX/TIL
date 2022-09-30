const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const csrf = require('csurf');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

const options = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'node_complete'
}

const app = express();
const store = new MySQLStore(options);
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');
const { all } = require('./routes/admin');

// 미들웨어로 사용
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret', 
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
app.use(csrfProtection);

app.use((req, res, next) => { // user 추출 미들웨어
  if (!req.session.user) {
    return next();
  }
  User.findByPk(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use((req, res, next) => { // 실행되는 모든 요청에 의해 랜더링 되는 뷰에서 csrf 적용
  res.locals.isAuthenticated = req.session.isLoggedIn // locals로 뷰에 입력할 로컬 변수 설정
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    app.listen(3000);
  })
  //   return User.findByPk(1);
  //   // console.log(result);
  //   })
  // .then(user => {
  //   if (!user) {
  //     return User.create({ 
  //       name: 'Jisoo', 
  //       email: 'Jisoo@test.com' 
  //     });
  //   }
  //   return Promise.resolve(user);
  //   return user;
  // })
  // .then(user => {
  //   // console.log(user);
  //   return user.createCart();
  
  // })
  // .then(cart => {
  //   app.listen(3000);
  // })                         
  .catch(err => {
    console.log(err);
  });