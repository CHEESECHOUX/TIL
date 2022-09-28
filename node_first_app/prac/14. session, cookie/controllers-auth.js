const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req
  //   .get('Cookie')
  //   .split(';')[1]  // 두번째 쿠키 추출
  //   .trim()         // 공백 없애기
  //   .split('=')[1]; // true 값
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  // res.setHeader('Set-Cookie', 'loggedIn=true; Max-Age=10'); // 쿠키 설정
  User.findByPk(1)
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save(err => { // 세션이 설정된 걸 확실하게 해야될 때
        console.log(err);
        res.redirect('/'); // 세션이 저장되는 것과 별개로 redirect가 실행되기 때문
      });
    })
    .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => { // 세션 객체로 접근해 파괴
    console.log(err);
    res.redirect('/');
  });
};