DROP DATABASE IF EXISTS watergripes;
-- 
CREATE DATABASE watergripes;

USE watergripes;

CREATE TABLE users (
  id INTEGER (0)  AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  zipcode INTEGER NOT NULL,
  PASSWORD VARCHAR(20) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY unique_email (email)
);
-- 

CREATE TABLE gripes (
  id INTEGER (0)  PRIMARY KEY  AUTO_INCREMENT,
  block_number INTEGER NOT NULL,
  street VARCHAR(100) NOT NULL,
  crossStreet VARCHAR(100) NOT NULL,
  zipcode INTEGER NOT NULL,
  latitude DECIMAL(11,8),
  longitude DECIMAL(11,8),
  gripe VARCHAR(255) NOT NULL,
  comment VARCHAR(255) NOT NULL,
  votes INTEGER NOT NULL,
  -- userId INTEGER NOT NULL,
  -- FOREIGN KEY (userId) integer users(id),
  status ENUM('Resolved', 'Unresolved') NOT NULL
  
);



-- /*  Execute this file from the command line by typing:
--  *    mysql -u root < schema.sql
--  *    OR
--  *    mysql -u root -p < schema.sql///
-- */

INSERT into users (username, email, zipcode, PASSWORD) VALUES ("buddy1", "buddy1@gmail.com", "70119", '12345'); 
INSERT into users (username, email, zipcode, PASSWORD) VALUES ("buddy2", "buddy2@gmail.com", "70118", "12345"); 
INSERT into users (username, email, zipcode, PASSWORD) VALUES ("buddy3", "buddy3@gmail.com", "70117", 'password'); 

INSERT into gripes (block_number, street, crossStreet, zipcode, latitude, longitude, gripe, comment, votes, status) 
  VALUES ( 200, "St. Charles", "3rd", "70130", 30, 90, "Geyser in the drain", "help me", 0, 'Unresolved'); 
INSERT into gripes (block_number, street, crossStreet, zipcode, latitude, longitude, gripe, comment, votes,  status) 
  VALUES ( 657, "St. Ann", "broad", "70119", 30, 90, "Flooded street due to dinosaur attacking pipe", "lots of water", 0, 'Unresolved'); 
INSERT into gripes (block_number, street, crossStreet, zipcode, latitude, longitude, gripe, comment, votes,  status) 
  VALUES ( 709, "Annuciation", "Washington", "12345", 30, 90, "Water water everywhere but not a drop", "We killed an Albatross", 0, 'Unresolved'); 
