const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'bruno',
  password: '$bmvBMV$12',
});

module.exports = connection;