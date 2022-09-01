exports.get404 = (req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' }); // 내비게이션에서 경로를 추출하려고 하기 때문에 path 추가
};