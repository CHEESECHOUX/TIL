const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET // admin경로 안에 있는 것임. app.js에서 필터링 한 것
router.get('/add-product', adminController.getAddProduct);

// admin/products => GET
router.get('/products', adminController.getProducts);

// admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;