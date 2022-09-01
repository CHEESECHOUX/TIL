const path = require('path');

const express = require('express');

// const rootDir = require('../util/path'); // 삭제
const productsController = require('../controllers/products');

const router = express.Router();

// const products = []; // 컨트롤러로 이동

// router.get('/add-product', (req, res, next) => { // 컨트롤러로 이동
//   res.render('add-product', { 
//     pageTitle: 'Add Product', 
//     path: '/admin/add-product',
//     formsCSS: true,
//     productCSS: true,
//     activeAddProduct: true
//   });
// });
router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

// exports.routes = router;
// exports.products = products; // product 배열이 없으니 제품을 내보내기 할 필요 없으므로 삭제
module.exports = router;