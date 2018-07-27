const Sequelize = require('sequelize');
const sequelize = new Sequelize('watergripes', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//define model for user
const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userName: {
    type: Sequelize.STRING
  },
  zipcode: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

//  //  force: true will drop the table if it already exists
//  User.sync({force: true}).then(() => {
//   // Table created
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });


//define model for gripe
const Gripe = sequelize.define('gripe', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true

  },
  dateReported: {
    type: Sequelize.DATE
  },
  blockNumber: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  street: {
    type: Sequelize.STRING,
    allowNull: false
  },
  crossStreet: {
    type: Sequelize.STRING,
    allowNull: true
  },
  zipcode: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  latitude: {
    type: Sequelize.DECIMAL,
    allowNull: true
  },
  longitude: {
    type: Sequelize.DECIMAL,
    allowNull: true
  },
  gripe: {
    type: Sequelize.STRING,
    allowNull: false
  },
  comment: {
    type: Sequelize.STRING,
    allowNull: false
  },
  votes: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,

  },
  status: {
    type: Sequelize.ENUM,
    values: ['Resolved', 'Unresolved']
  }

})

//  force: true will drop the table if it already exists
//  Gripe.sync({force: true}).then(() => {
//   // Table created
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });

//Applying Item Table to database
sequelize.sync({
  force: true})
  .then(function (err) {
  if (err) {
    console.log('An error occur while creating table');
  } else {
    console.log('Item table created successfully');
  }
});




module.exports = sequelize;
