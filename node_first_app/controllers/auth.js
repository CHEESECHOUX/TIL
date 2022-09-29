const bcrypt = require('bcryptjs');

const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findByPk(1)
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save(err => {
        console.log(err);
        res.redirect('/');
      });
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  User.findOne({ email: email }) // 데이터베이스 이메일: 추출한 이메일
    .then(userDoc => { 
      if (userDoc) { // undefined가 아니라면, 사용자가 있다면 같은 이메일 생성 금지
        return res.redirect('/signup'); // signup으로 리다이렉트해 생성되지 않았다고 알려줌
      }
      return bcrypt
      .hash(password, 12) // 12는 솔트값
      .then(hashedPassword => {
        const user = new User({
          email: email,
          password: hashedPassword,
          cart: { items: [] }
        });
        return user.save(); // 유효한 사용자를 데이터베이스에 저장
      })
      .then(result => {
        res.redirect('/login');
      }); 
    })
    .catch(err => {
      console.log(err);
    }); 
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};