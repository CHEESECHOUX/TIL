const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

// const rootDir = require('../util/path');
// const adminData = require('./admin');

const router = express.Router();

// router.get('/', (req, res, next) => { // 컨트롤러 로직임
//   const products = adminData.products; // 데이터와 교류
//   res.render('shop', { // 뷰 반환
//     prods: products,
//     pageTitle: 'Shop',
//     path: '/',
//     hasProducts: products.length > 0,
//     activeShop: true,
//     productCSS: true
//   });
// });
router.get('/', productsController.getProducts);

module.exports = router;