const bcrypt = require('bcryptjs');

const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  // console.log(req.flash('error'));
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: message
    // isAuthenticated: false // 미들웨어에 추가했으므로 삭제
  });
};

exports.getSignup = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    errorMessage: message
    // isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email }) // 데이터베이스에
    .then(user => {
      if (!user) { // 사용자가 없다면
        req.flash('error', 'Invalid email or password.'); // 세션 에러 알림
        return res.redirect('/login');
      }
      bcrypt // email이 있으면 password 검증
        .compare(password, user.password) // 사용자가 입력한 비번, DB내에 저장 되어있는 비번
        .then(doMatch => {
          if (doMatch) {
            req.session.isLoggedIn = true; // 사용자가 일치한 경우에만 세션
            req.session.user = user; // DB의 user
            return req.session.save(err => {
              console.log(err);
              res.redirect('/'); // 올바른 비번 입력시 시작페이지로 리다이렉트
            });
          }
          req.flash('error', 'Invalid email or password.');
          res.redirect('/login'); // 비번 틀리면
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
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
        req.flash('error', 'E-Mail exists already, please pick a different one.');
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