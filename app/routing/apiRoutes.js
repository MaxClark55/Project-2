
//const JSON = require('circular-json');
//const json = JSON.stringify(carsData);

var carsData = require("../data/cars.js");
//var carsData = require("../config/connection.js");

module.exports = function(app) {

// Displays all cars
  app.get("/api/cars", function(req, res) {
    return res.json(carsData);
  });


// Displays a single car, or returns false
  app.get("/api/cars/:car", function(req, res) {
    var chosen = req.params.car;
    
    console.log(chosen);
    
    for (var i = 0; i < carsData.length; i++) {
        if (chosen === carsData[i].make) {
        return res.json(carsData);
        }
    }
    
    return res.json(false);
    });

  // If a user sends data to add a new character...
  app.post("/api/cars", function(req, res) {
    // Take the request...
    var car = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var routeName = car.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    Car.create({
      year: year,
      make: car.make,
      model: car.model,
      zero_to_sixty: car.zero_to_sixty,
      quarter_mile: car.quarter_mile
    });
  });


};







/*

// Creates a new car and adds it to the database
app.post("/api/cars", function(req, res) {
  var newCar = req.body;

  console.log(newCar);

  cars.push(newCar);

  res.json(newCar);
});

  

Another post example

  // Create New Characters - takes in JSON input
  app.post("/api/characters", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newcharacter = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newcharacter);
  
    characters.push(newcharacter);
  
    res.json(newcharacter);
  });
  

 */ 