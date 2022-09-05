const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

// router.get('/products/delete'); // 동적 세그먼트와 특정 라우트가 있으면 더 구체적인 라우트를 앞에 두어야함

router.get('/products/:productId', shopController.getProduct); // 상품 한 개 추출. 변수 세그먼트. 동적 매개변수

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;