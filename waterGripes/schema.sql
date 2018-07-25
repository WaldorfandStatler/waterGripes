DROP DATABASE IF EXISTS waterGripes;

CREATE DATABASE waterGripes;

USE waterGripes;

CREATE TABLE users (
  user_id int NOT NULL AUTO_INCREMENT,
  user_name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  zipcode integer NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE gripes (
  id int NOT NULL AUTO_INCREMENT,
  block_number integer NOT NULL,
  street varchar(255) NOT NULL,
  zipcode integer NOT NULL,
  lat DECIMAL(11 ,8),
  long DECIMAL(11, 8),
  gripe varchar(255) NOT NULL,
  comment varchar(255) NOT NULL,
  resolvedVotes integer NOT NULL,
  unresolvedVotes integer NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  status ENUM('Resolved', 'Unresolved') NOT NULL,
);



/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 
*/


