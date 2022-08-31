// const products = []; // 모델 만들기 전 
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', { 
    pageTitle: 'Add Product', 
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
}

exports.postAddProduct = (req, res, next) => {
  // products.push({ title: req.body.title });
  const product = new Product(req.body.title); // add-product.ejs 의 title
  product.save(); // model
  res.redirect('/');
};

exports.getProducts = (req, res, next) => { // Product 모두 가져오기 // model product cb
  Product.fetchAll(products => {            // 제품을 모두 가져오는 과정이 끝난 뒤에 fetchAll에 전달하게 될 product에 렌더링
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};