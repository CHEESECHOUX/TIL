module.exports = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.redirect('/login');
  }
  next(); // router에 연동했을 때 로그인이 되어있다면 controller로 넘어가게 해주는 역할
}