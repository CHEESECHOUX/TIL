const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product', 
    path: '/admin/add-product',
    // formsCSS: true, // 삭제
    // productCSS: true,
    // activeAddProduct: true
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price); // product model save의 this 처리 위해 null 처리
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit; // url 쿼리 매개변수
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.prodId; // router에 있는 url로 부터 제품 id 가져오기
  Product.findById(prodId, product => { // id를 통해 제품 모델을 찾고, 찾은 제품을 전송받는 콜백
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product', 
      path: '/admin/edit-product', // 상품 정보 전달
      editing: editMode,
      product: product // edit-product 뷰로 보내줄 상품이 뭔지
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatePrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedProduct = new Product(
    prodId, 
    updatedTitle,  
    updatedImageUrl, 
    updatedDesc, 
    updatePrice
  );
  updatedProduct.save();
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId);
  res.redirect('/admin/products');
};