const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes); // routes export 방법을 변경했기 때문에 변경해줌
app.use('/admin', adminData.routes); // routes와 product 두 가지 모두 내보내는 것이기 때문에 adminData로 이름 변경
app.use(shopRoutes);

// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// });
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: 'Error' }); // 404.ejs 참조
});

app.listen(3000);