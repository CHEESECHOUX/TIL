const fs = require('fs');

const requestHandler = (req, res) => { // http.createServer함수를 대체
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = []
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Jisoo First Page</title><head>');
  res.write('<body><h1>Hello from Jisoo Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
};

// module.exports = requestHandler; // requestHandler 함수로 내보내기

// module.exports = { //routes 가 객체가 되는 것
//   handler: requestHandler,
//   someText: 'Some hard coded text'
// }; 

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';