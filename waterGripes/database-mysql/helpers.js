const connection = require('../database-mysql/index.js');


const getAllGripes = ()=>{
  return new Promise(function (resolve, reject) {

    connection.query('SELECT * FROM gripes', function (err, gripes) {
      if (err) {
        return reject(err);
      }
      console.log(" get All Gripes data received from database");
      return resolve(gripes);
    });
  });
};

const gripeById = (id) => {
  console.log('gripe by id fired');
  const query = `SELECT * FROM gripes WHERE id = '${id}'`;
  return new Promise(function (resolve, reject) {
    connection.query(query, function (err, gripe) {
      if (err) {
        return reject(err);
      }
      console.log("gripe retrieved from database", gripe);
      return resolve(gripe);
    });
  });
}


const getLocationData = (id)=>{};

const submitGripe = (gripeInput)=>{
  console.log(gripeInput);
  let blockNumber = gripeInput.block_number;
  let street = gripeInput.street;
  let crossStreet = gripeInput.crossStreet;
  let zipcode = gripeInput.zipcode;
  let latitude = gripeInput.latitude;
  let longitude = gripeInput.longitude;
  let gripe = gripeInput.gripe;
  let comment = gripeInput.comment;
  let votes = gripeInput.votes;
  let status = gripeInput.status;

  //the query string;
  let query = `INSERT into gripes (block_number, street, crossStreet, zipcode, latitude, longitude, gripe, comment, votes,  status) 
  VALUES ( '${blockNumber}', '${street}', '${crossStreet}', '${zipcode}', '${latitude}', '${longitude}', '${gripe}', '${comment}', 5, 'Unresolved'); `

  return new Promise(function (resolve, reject) {
    connection.query(query, function (err, result) {
      if (err) {
        return reject(err);
      }
      console.log("submit gripe successful");
      return resolve(result);
    });
  });

};
const updateGripe = (gripeVote)=>{
  let id = gripeVote.id;
  let vote = gripeVote.gripeVote;

  let query = ` UPDATE  gripes SET votes = votes + '${vote}' WHERE id = '${id}'`;
    return new Promise(function (resolve, reject) {
      connection.query(query, function (err, result) {
        if (err) {
          return reject(err);
        }
        console.log("vote gripe successful");
        return resolve(result);
      });
    });
  };

//TODO: needs to be tested
const createUser = (userInfo)=>{
  console.log("trying to get username here", userInfo.username);
  // let userInfo = user.headers;
  let username = userInfo.username;
  let zipcode = userInfo.zipcode;
  let email = userInfo.email;
  let password = userInfo.PASSWORD;
  //INSERT into users (username, email, zipcode, PASSWORD) VALUES ("buddy", "buddy3@gmail.com", "70117", 'password'); 

  let query = `INSERT into users (username, email, zipcode, PASSWORD) VALUES ( '${username}', '${email}', '${zipcode}', '${password}')`; 
  //  let query = `INSERT into users (username, email, zipcode, PASSWORD) VALUES ("buddy1", "buddy1@gmail.com", "70119", '12345'); 
  //  `;
  return new Promise(function (resolve, reject) {
    connection.query(query, function (err, result) {
      // console.log('gripes retrieved', JSON.stringify(phrases));
      if (err) {
        return reject(err);
      }
      console.log("create user successful");
      return resolve(result);
    });
  });
};


const loginUser = (user) => {
  //
};
 
module.exports = {
  getAllGripes: getAllGripes,
  createUser : createUser,
  submitGripe : submitGripe,
  updateGripe: updateGripe,
  gripeById: gripeById
}

