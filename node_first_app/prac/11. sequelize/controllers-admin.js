const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  req.user.createProduct({ // 요청에 저장되어 있는 사용자 객체를 사용하는 것 // sequelize에서 관계설정을 할 수 있도록 도와줌
    title: title,  // const title: 모델 title
    price: price,
    imageUrl: imageUrl,
    description: description
  })
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products');
    })
    .catch(err => {
      console.log(err)
  });
    // .save()
    // .then(() => {
    //   res.redirect('/');
    // })
    // .catch(err => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId; // 제품id검색
  req.user.getProducts({where: {id: prodId}}) // 현재 접속중인 사용자에 대한 제품만 가져오기
  // Product.findByPk(prodId)
  .then(products => {
    const product = products[0]; // 배열을 리턴받기 때문에 하나를 잡아줘야함
    if (!product) {
      return res.redirect('/'); // 제품이 없으면 redirect
    }
    res.render('admin/edit-product', { // 제품 있으면 로드된 제품과 뷰를 렌더링
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  })
  .catch(err => console.log(err)
  );
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findByPk(prodId)                // 변경하길원하는 요소를 데이터베이스에서 찾기
    .then(product => {                    // 검색한 product
      product.title = updatedTitle;       // 데이터베이스가 아닌 로컬에서만 update
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      return product.save();              // 데이터베이스까지 update
    })
    .then(result => {                     // save promise 응답 처리
      console.log('UPDATED PRODUCT!');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));      // 첫번째 promise catch, 두번째 promise findByPk 응답 처리
};

exports.getProducts = (req, res, next) => {
  // Product.findAll()
  req.user                                // 사용자의 제품을 가져오는 것으로 변경
  .getProducts() 
  .then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err => {
    console.log(err);
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId)
  .then(product => {
    return product.destroy();
  })
  .then(result => {
    console.log('DESTROYED PRODUCT');
    res.redirect('/admin/products');
  })
  .catch(err => console.log(err));
};