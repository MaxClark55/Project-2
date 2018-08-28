// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Car = sequelize.define("car", {
  // the routeName gets saved as a string
  year: Sequelize.INTEGER,
  // the name of the character (a string)
  make: Sequelize.STRING,
  // the character's role (a string)
  model: Sequelize.STRING,
  // the character's age (a string)
  zero_to_sixty: Sequelize.INTEGER,
  // and the character's force points (an int)
  quarter_mile: Sequelize.INTEGER
});

// Syncs with DB
Car.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Car;