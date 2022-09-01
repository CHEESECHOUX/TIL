const Product = require('../models/product');

exports.getProducts = (req, res, next) => { 
  Product.fetchAll(products => {
    res.render('shop/product-list', { // 뷰 경로
      prods: products,
      pageTitle: 'All Products',
      path: '/products', // 내비게이션에서 확인하는 경로
      // hasProducts: products.length > 0, // handlebars 사용 안 하니까 삭제
      // activeShop: true,
      // productCSS: true
    });
  });
};

exports.getIndex = (req, res, next) => { // 시작페이지
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
};

exports.getCart = (req, res, next) => { 
  res.render('shop/cart', {
    pageTitle: 'Your Cart',
    path: '/cart',
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path: '/checkout',
  });
};