const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => { // Products 페이지
  Product.findAll()
    .then(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// findAll, findByPk 둘 다 사용 가능
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({where: { id: prodId } }) 
  //   .then(products => {
  //     res.render('shop/product-detail', {
  //       product: products[0], // findAll 함수는 디폴트로 배열을 줌 0으로 잡아줘야함
  //       pageTitle: products[0].title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));
  Product.findByPk(prodId) 
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => { // Shop 페이지
  Product.findAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user.getCart()                     // 장바구니 가져와서
  .then(cart => {
    return cart
      .getProducts()                     // 장바구니 안에 있는 제품 가져오기
      .then(products => {
        res.render('shop/cart', {
          path: '/cart',
          pageTitle: 'Your Cart',
          products: products
        });
      })
      .catch(err => console.log(err)); 
  })
  .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedCart;
  let newQuantity = 1; // 기본 수량 1
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts({ where: {id: prodId} });
    })
    .then(products => {
      let product;
      if (products.length > 0) {      // 장바구니에 제품이 존재한다면 
      product = products[0];
      }

      if (product) {                  // 장바구니에 존재하는 제품의 수량 변경
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return product;
      }
      return Product.findByPk(prodId) // 장바구니에 제품이 없다면 새로 제품 추가
    })
    .then(product => {
      return fetchedCart.addProduct(product, { // addProduct는 sequelize 다대다 메서드
        through: { quantity: newQuantity }     // cart-item 추가한 필드 설정.
      });
    })
    .then(() => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user.getCart()                     // cart에서 해당 사용자를 위한 제품을 가져오기 (prodId를 가진 제품)
  .then(cart => {
    return cart.getProducts({ where: { id: prodId } });
  })
  .then(products => {
    const product = products[0];         // 해당 제품을 가져옴
    return product.cartItem.destroy();   // 해당 제품을 cart-item에서만 삭제하기
  })
  .then(result => {
    res.redirect('/cart');
  })
  .catch(error => console.log(err));
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};