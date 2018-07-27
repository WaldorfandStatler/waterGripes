DROP DATABASE IF EXISTS watergripes;

CREATE DATABASE watergripes;

USE watergripes;

CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  zipcode INTEGER NOT NULL,
  -- PASSWORD VARCHAR(20) NOT NULL),
  PRIMARY KEY (id)
);

CREATE TABLE gripes (
  id INTEGER NOT NULL AUTO_INCREMENT,
  block_number INTEGER NOT NULL,
  street VARCHAR(100) NOT NULL,
  cross_street VARCHAR(100) NOT NULL,
  zipcode INTEGER NOT NULL,
  latitude DECIMAL(11,8),
  longitude DECIMAL(11,8),
  gripe VARCHAR(255) NOT NULL,
  comment VARCHAR(255) NOT NULL,
  votes INTEGER NOT NULL,
  -- FOREIGN KEY (userId) REFERENCES users(id),
  status ENUM('Resolved', 'Unresolved') NOT NULL
);



-- /*  Execute this file from the command line by typing:
--  *    mysql -u <USER> < schema.sql
--  *    OR
--  *    mysql -u <USER> -p < schema.sql///
-- */

INSERT into users (username, email, zipcode, PASSWORD) VALUES ("buddy1", "buddy1@gmail.com", "70119", '12345'); 
INSERT into users (username, email, zipcode, PASSWORD) VALUES ("buddy2", "buddy2@gmail.com", "70118", "12345"); 
INSERT into users (username, email, zipcode, PASSWORD) VALUES ("buddy", "buddy3@gmail.com", "70117", 'password'); 

INSERT into gripes (block_number, street, cross_street, zipcode, latitude, longitude, gripe, comment, resolvedVotes, unresolvedVotes, status) 
  VALUES (200, "St. Charles", "3rd", "70130", 30, 90, "water leaking from fire hydrant", "lots of water", 0, 0); 
INSERT into gripes (block_number, street, cross_street, zipcode, latitude, longitude, gripe, comment, resolvedVotes, unresolvedVotes, status) 
  VALUES (201, "St. Charles", "3rd", "70130", 30, 90, "water leaking from fire hydrant", "lots of water", 0, 0); 
INSERT into gripes (block_number, street, cross_street, zipcode, latitude, longitude, gripe, comment, resolvedVotes, unresolvedVotes, status) 
  VALUES (202, "St. Charles", "3rd", "70130", 30, 90, "water leaking from fire hydrant", "lots of water", 0, 0); 
