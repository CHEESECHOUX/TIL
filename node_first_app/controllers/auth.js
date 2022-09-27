exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req
  //   .get('Cookie')
  //   .split(';')[1]  // 두번째 쿠키 추출
  //   .trim()         // 공백 없애기
  //   .split('=')[1]; // true 값
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    // isAuthenticated: isLoggedIn
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader('Set-Cookie', 'loggedIn=true; Max-Age=10');
  res.redirect('/');
};