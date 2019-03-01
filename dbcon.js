var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_martinb3',
  password        : '1529',
  database        : 'cs340_martinb3'
});
module.exports.pool = pool;
