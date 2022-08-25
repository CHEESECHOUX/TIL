const http = require('http'); // http 글로벌 모듈을 불러옴

const routes = require('./routes'); // 사용자 지정 파일
// function rqListener(req, res) { 

// }

// http.createServer(rqListener);

// http.createServer(function(req, res) { // 익명함수

// });

console.log(routes.someText);

const server = http.createServer(routes.handler);

// const server = http.createServer(routes); // 서버를 가동

// const server = http.createServer((req, res) => { // createServer 콜백함수
// console.log(req.url, req.method, req.headers);
// process.exit();
// });

server.listen(3000);