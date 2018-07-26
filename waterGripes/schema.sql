DROP DATABASE IF EXISTS watergripes;

CREATE DATABASE watergripes;

USE watergripes;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  userName VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  zipcode INTEGER NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE gripes (
  id INTEGER NOT NULL AUTO_INCREMENT,
  block_number INTEGER NOT NULL,
  street VARCHAR(100) NOT NULL,
  zipcode INTEGER NOT NULL,
  latitude DECIMAL(11,8),
  longitude DECIMAL(11,8),
  gripe VARCHAR(255) NOT NULL,
  comment VARCHAR(255) NOT NULL,
  resolvedVotes INTEGER NOT NULL,
  unresolvedVotes INTEGER NOT NULL,
  FOREIGN KEY (id) REFERENCES users(id),
  status ENUM('Resolved', 'Unresolved') NOT NULL
);



-- /*  Execute this file from the command line by typing:
--  *    mysql -u <USER> < schema.sql
--  *    OR
--  *    mysql -u <USER> -p < schema.sql
 
<<<<<<< HEAD
INSERT into users ( userName, email, zipcode) VALUES ("Billy Bob", "jbutts@email.com", 70119);
INSERT into users ( userName, email, zipcode) VALUES ("Sam Smith", "snarkydog@gmail.com", 70119);
INSERT into users ( userName, email, zipcode) VALUES ("Fred Zimmerman", "thewildman@gmail.com", 70310);
INSERT into users ( userName, email, zipcode) VALUES ("Dudley Doolittle", "thewildman@gmail.com", 70310);

-- INSERT into gripes ( block_number, street, zipcode, latitude, longitude, gripe, comment, resolvedVotes, unresolvedVotes, status) VALUES ("Billy Bob", "jbutts@email.com", 70119);




=======
-- */
>>>>>>> aed134ac83e85eae98d18fe2869dbc2c111d231d


