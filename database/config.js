const mysql = require('mysql');
const { ModuleFilenameHelpers } = require('webpack');

var connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'afterthought'
});

connection.connect(err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected to DB');
  }
})

module.exports = connection;
