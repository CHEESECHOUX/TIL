// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use((req, res, next) => { // 응답을 보내지 않고, 요청을 다음 함수로 이동시키려면 next를 호출해야함
//   console.log('In the middleware!');
//   next();
// });

// app.use('/', (req, res, next) => {  // 모든 요청에 적용할 미들웨어
//   console.log('This always runs!')
//   next();
// });

app.use(bodyParser.urlencoded({extended: false})); // user입력 값을 객체로 받을 수 있게 해줌(key, value)
                                                   // req의 본문 분석. 요청이 어디로 향하든 본문 분석이 이루어지도록 경로처리 미들웨어 이전에 작성

app.use('/add-product', (req, res, next) => {
  // console.log('In another middleware!');
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => { // app.use는 http 모든 요청에 실행됨
  console.log(req.body); 
  res.redirect('/'); // 버튼 누르면 메인페이지로
});

app.use('/', (req, res, next) => {
  // console.log('In another middleware!');
  res.send('<h1>Hello Jisoo</h1>');
});

// const server = http.createServer(app);

// server.listen(3000); 
app.listen(3000);