const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes-admin');
const shopRoutes = require('./routes-shop');

app.use(bodyParser.urlencoded({extended: false}));

// app.use(adminRoutes); // 함수처럼 호출하지 않고 router 객체를 입력
// app.use(shopRoutes);
app.use('/admin', adminRoutes); // 파일들의 모든 루트가 app.js 파일로 위탁하는데 사용할 공통경로를 만드는 필터를 걸어줌
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);