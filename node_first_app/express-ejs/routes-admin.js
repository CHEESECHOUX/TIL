const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = []; // user가 입력한 add-product

// router.get('/add-product', (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
// });
router.get('/add-product', (req, res, next) => {
  res.render('add-product', { // 렌더링 호출. 템플릿 엔진 사용. 해당 view 입력
    pageTitle: 'Add Product', // 변수로 전달되는 데이터를 가진 객체를 정의
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

// router.post('/add-product', (req, res, next) => {
//   // console.log(req.body);
//   products.push({ title: req.body.title }); // title속성을 가진 객체를 잡아줌
//   res.redirect('/');
// });
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

// module.exports = router;
exports.routes = router;
exports.products = products;