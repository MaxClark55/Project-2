
// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
// Dependencies
var Sequelize = require("sequelize");
// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("carsdb", "root", "Boomer1", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
// Exports the connection for other files to use
module.exports = sequelize;


var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Boomer1",
  database: "carsDB"
});

connection.connect(function(err) {
  if (err) throw err;
});


var query = connection.query("SELECT * FROM cars_table", function (err, res) {
  if (err) throw err;
  // Log all results of the SELECT statement
  for (var i = 0; i < res.length; i ++) {
    console.log(res.json[i]);
  }
  connection.end();
});

module.exports = query;