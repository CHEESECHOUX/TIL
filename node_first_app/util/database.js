const mysql = require('mysql2');

const pool = mysql.creatPool({
  host: 'local host',
  user: 'root',
  database: 'node-complete',
  password: 'nodecomplete'
});

module.exports = pool.promise();