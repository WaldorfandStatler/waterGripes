const Sequelize = require('sequelize');



const getAllGripes = ()=>{};

const getLocationData = (id)=>{};

const submitGripe = (gripe)=>{};

const updateGripe = (id, gripeVote)=>{};

const getGripeLocationById = (id) =>{};

const createUser = (userInfo)=>{
  let name = userInfo.name;
  let zipcode = userInfo.zipcode;
  let email = userInfo.email;
  let password = userinfo.password;

<<<<<<< HEAD
//  force: true will drop the table if it already exists
  User.sync({force: true}).then(() => {
    // Table created
    return User.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
  });
};


}

=======
>>>>>>> 8aae5bbe989bbe0b5d6f1bf06f16b08158ec8b2d
  


  // force: true will drop the table if it already exists
//   User.sync({force: true}).then(() => {
//     // Table created
//     return User.create({
//       firstName: 'John',
//       lastName: 'Hancock'
//     });
//   });
// };

const loginUser = (user) => {};


 


