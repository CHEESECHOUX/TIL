const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', { 
    pageTitle: 'Add Product', 
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => { // 모든 제품을 가져오고 view를 렌더링
  Product.fetchAll(products => { // 모든 제품 가져와라
    res.render('admin/products', { // 뷰
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};