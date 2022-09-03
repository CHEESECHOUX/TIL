const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => { 
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
    });
  });
};

exports.getProduct = (req, res, next) => { // 상품 한 개 추출. 동적 경로 세그먼트
  const prodId = req.params.productId; // routes의 shop.js 콜론 이후에 오는 이름
  Product.findById(prodId, product => { // 위에 임포트한 모델에서 findById 함수. 다시 product에 담아서 콘솔로그 찍기
    res.render('shop/product-detail', {
      product: product, 
      pageTitle: product.title,
      path: '/products'
    });
  });
};

exports.getIndex = (req, res, next) => {
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

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId; // detail 뷰의 hidden input에서 사용한 이름
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.getOrders = (req, res, next) => { 
  res.render('shop/orders', {
    pageTitle: 'Your Orders',
    path: '/orders',
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path: '/checkout',
  });
};