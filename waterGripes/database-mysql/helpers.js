const connection = require('../database-mysql/index.js');

console.log('hello there');

function testData(){
  let query = `INSERT into gripes (block_number, street, crossStreet, zipcode, latitude, longitude, gripe, comment, votes, status) 
  VALUES ( 200, "St. Charles", "3rd", "70130", 30, 90, "water leaking from fire hydrant", "lots of water", 0, 'Unresolved')`; 
  
  return new Promise(function (resolve, reject) {
    connection.query(
      query, function (err, gripes) {
      // console.log('gripes added');
      if (err) {
        return reject(err);
      }
      console.log("data received from database");
      return resolve(gripes);
    });
  });
}

console.log(testData());

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
getAllGripes();



const getLocationData = (id)=>{};

const submitGripe = (gripe)=>{

};

const updateGripe = (id, gripeVote)=>{};

const getGripeLocationById = (id) =>{};

const createUser = (userInfo)=>{
  let name = userInfo.name;
  let zipcode = userInfo.zipcode;
  let email = userInfo.email;
  let password = userinfo.password;

  

}


const loginUser = (user) => {};


 
module.exports = {
  getAllGripes: getAllGripes
}

