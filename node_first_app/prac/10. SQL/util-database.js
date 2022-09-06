const mysql = require('mysql2');

// 커넥션 풀로 설정
const pool = mysql.creatPool({
  host: 'local host',
  user: 'root',
  database: 'node-complete',
  password: 'nodecomplete'
});

module.exports = pool.promise();