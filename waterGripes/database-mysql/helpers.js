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
  let blockNumber = gripeInput.blockNumber;
  let street = gripeInput.street;
  let crossStreet = gripeInput.crossStreet;
  let zipcode = gripeInput.inputZip;
  let latitude = 30.5;
  let longitude = 90.0;
  let gripe = gripeInput.gripe;
  let comment = gripeInput.comment;
  let votes = gripeInput.votes;
  let status = gripeInput.status;

  //the query string;
  let query = `INSERT into gripes (block_Number, street, crossStreet, zipcode, latitude, longitude, gripe, comment, votes,  status) 
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
const updateGripe = ({ id, votes })=>{
  const query = 'UPDATE gripes SET votes = votes + ? WHERE id = ?';
    return new Promise((resolve, reject) => {
      connection.query(query, [votes, id], (err, result) => {
        if (err) {
          return reject(err);
        }
        console.log("vote gripe successful");
        return resolve(result);
      });
    });
  };

const checkVotes = ({ id }) => {
  // check votes
  const getVotes = 'SELECT votes FROM gripes WHERE id = ?'
  return new Promise((resolve, reject) => {
    connection.query(getVotes, [id], (err, result) => {
      if (err) {
        return reject(err);
      }
      console.log(result);
      return resolve(result);
    });
  })
};
// console.log(checkVotes({ id: 6 }));

const setStatus = (id, status) => {
  const set = 'UPDATE gripes SET status = ? WHERE id = ?';
  return new Promise((resolve, reject) => {
    connection.query(set, [status, id], (err, result) => {
      if (err) {
        return reject(err);
      }
      console.log(result);
      return resolve(result);
    });
  })
};
// console.log(setStatus(1, 'Resolved'));

//TODO: needs to be tested
const createUser = (userInfo)=>{
  console.log("trying to getinfo");
  // let userInfo = user.headers;
  let username = userInfo.name;
  let email = userInfo.email;
  let image = userInfo.image

  let query = `INSERT into users (username, email) VALUES ( '${username}', '${email}')`; 
  
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
   getAllGripes,
  createUser,
  submitGripe,
  updateGripe,
  gripeById,
  checkVotes,
  setStatus,
}

