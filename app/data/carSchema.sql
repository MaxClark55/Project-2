DROP DATABASE IF EXISTS carsDB;
CREATE database carsDB;

USE carsDB;

CREATE TABLE cars_table (
  id INT NOT NULL,
  year INT NOT NULL,
  make VARCHAR(100) NOT NULL,
  model VARCHAR(100) NOT NULL,
  zero_to_sixty DECIMAL(10,4) NOT NULL,
  quarter_mile DECIMAL(10,4) NOT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM cars_table;