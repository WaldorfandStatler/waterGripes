const connection = require('../database-mysql/index.js');

console.log('hello there');

// function testData(){
//   let query = `INSERT into gripes (block_number, street, crossStreet, zipcode, latitude, longitude, gripe, comment, votes, status) 
//   VALUES ( 200, "St. Charles", "3rd", "70130", 30, 90, "water leaking from fire hydrant", "lots of water", 0, 'Unresolved')`; 
  
//   return new Promise(function (resolve, reject) {
//     connection.query(
//       query, function (err, gripes) {
//       // console.log('gripes added');
//       if (err) {
//         return reject(err);
//       }
//       console.log("data received from database");
//       return resolve(gripes);
//     });
//   });
// }

// console.log(testData());

const getAllGripes = ()=>{
  return new Promise(function (resolve, reject) {
    connection.query('SELECT * FROM gripes', function (err, gripes) {
      // console.log('gripes retrieved', JSON.stringify(phrases));
      if (err) {
        return reject(err);
      }
      console.log(" get All Gripes data received from database");
      return resolve(gripes);
    });
  });
};
// getAllGripes();



const getLocationData = (id)=>{};

const submitGripe = (gripeInput)=>{
  let blockNumber = gripeInput.blockNumber;
  let street = gripeInput.street;
  let crossStreet = gripeInput.crossStreet;
  let zipcode = gripeInput.crossStreet;
  let latitude = gripeInput.latitude;
  let longitude = gripeInput.longitude;
  let gripe = gripeInput.gripe;
  let comment = gripeInput.comment;
  let votes = gripeInput.votes;
  let status = gripeInput.status;

  //the query string;
  let query = `INSERT into gripes (block_number, street, crossStreet, zipcode, latitude, longitude, gripe, comment, votes,  status) 
  VALUES ( ${blockNumber}, ${street}, ${crossStreet}, ${zipcode}, ${latitude}, ${longitude}, ${gripe}, ${comment}, ${votes}, ${status}); `

  return new Promise(function (resolve, reject) {
    connection.query(query, function (err, result) {
      // console.log('gripes retrieved', JSON.stringify(phrases));
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
        // console.log('gripes retrieved', JSON.stringify(phrases));
        if (err) {
          return reject(err);
        }
        console.log("vote gripe successful");
        return resolve(result);
      });
    });
  };

const getGripeLocationById = (id) =>{
  //search by id, then pull location data for each id
  // let query = `SELECT * from gripes WHERE id = '${id}'`;
  // return new Promise(function (resolve, reject) {
  //   connection.query(query, function (err, result) {
  //     // console.log('gripes retrieved', JSON.stringify(phrases));
  //     if (err) {
  //       return reject(err);
  //     }
  //     console.log("vote gripe successful");
  //     return resolve(result);
  //   });
  // });

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
  getGripeLocationById: getGripeLocationById
}

