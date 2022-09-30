const Product = require('../models/product');
const Order = require('../models/order');

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products',
        isAuthenticated: req.isLoggedIn
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
        path: '/products',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.find()
  console.log(getIndex);
    // .then(products => {
    //   res.render('shop/index', {
    //     prods: products,
    //     pageTitle: 'Shop',
    //     path: '/'
    //     // isAuthenticated: req.isLoggedIn,
    //     // csrfToken: req.csrfToken()
    //   });
    // })
    // .catch(err => {
    //   console.log(err);
    // });
};

exports.getCart = (req, res, next) => {
  req.user
    // .getCart()
    // .then(cart => {
    //   return cart
    //     .getProducts()
    //     .then(products => {
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items;
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products,
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err)); 
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      res.redirect('/cart');
    });
  // let fetchedCart;
  // let newQuantity = 1;
  // req.user
  //   .getCart()
  //   .then(cart => {
  //     fetchedCart = cart;
  //     return cart.getProducts({ where: { id: prodId } });
  //   })
  //   .then(products => {
  //     let product;
  //     if (products.length > 0) {
  //       product = products[0];
  //     }

  //     if (product) {
  //       const oldQuantity = product.cartItem.quantity;
  //       newQuantity = oldQuantity + 1;
  //       return product;
  //     }
  //     return Product.findById(prodId);
  //   })
  //   .then(product => {
  //     return fetchedCart.addProduct(product, {
  //       through: { quantity: newQuantity }
  //     });
  //   })
  //   .then(() => {
  //     res.redirect('/cart');
  //   })
  //   .catch(err => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then(result => {
      res.redirect('/cart');
    })
    // .getCart()
    // .then(cart => {
    //   return cart.getProducts({ where: { id: prodId } });
    // })
    // .then(products => {
    //   const product = products[0];
    //   return product.cartItem.destroy();
    // })
    // .then(result => {
    //   res.redirect('/cart');
    // })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  // let fetchedCart;
  req.user
  .populate('cart.item.productId')
  .execPopulate()
  .then(user => {
    const products = user.cart.items.map(i => {
      return { quantity: i.quantity, product: { ...i.productId._doc } };
    });
    const order = new Order({
      user: {
        email: req.user.email,
        userId: req.user
      },
      products: products
    });
    return order.save();
  })
  .then(result => {
    return req.user.clearCart();
  })
  .then(() => {
    res.redirect('/orders');
  })
  .catch(err => console.log(err));
    // .getCart()
    // .then(cart => {
    //   fetchedCart = cart;
    //   return cart.getProducts();
    // })
    // .then(products => {
    //   return req.user
    //     .createOrder()
    //     .then(order => {
    //       return order.addProducts(
    //         products.map(product => {
    //           product.orderItem = { quantity: product.cartItem.quantity };
    //           return product;
    //         })
    //       );
    //     })
    //     .catch(err => console.log(err));
    // })
    // .then(result => {
    //   return fetchedCart.setProducts(null);
    // })
    // .then(result => {
    //   res.redirect('/orders');
    // })
    // .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  Order.find({ 'user.userId': req.user._id })
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders,
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
  // req.user
  //   .getOrders({include: ['products']})
  //   .then(orders => {
  //     res.render('shop/orders', {
  //       path: '/orders',
  //       pageTitle: 'Your Orders',
  //       orders: orders
  //     });
  //   })
  // .catch(err => console.log(err));
};