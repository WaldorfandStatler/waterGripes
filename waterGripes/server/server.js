const express = require('express');
const path = require('path');
const { urlencoded, json } = require('body-parser')

// const db = require('../database-mysql/index.js')
const db = require('../database-mysql/helpers.js');
const app = express();

app.use(urlencoded({ extended: false }))
app.use(json())


app.use(express.static(path.resolve(__dirname, '../dist/waterGripes')));

///////////gripe endpoints///////////////

//endpoint to retrive all existing gripes
app.get('/gripes', (req, res) => {

  db.getAllGripes()
    .then((gripes) => {
      console.log('got all gripes server response');
      res.send(gripes);
    })
    .catch((err) => {
      console.error("error retrieving database data");
    });
  
});

app.get('/gripes/:id', (req, res) => {
  const  id = req.headers.id;
  db.gripeById(id)
    .then((gripe) => {
      console.log('got your gripe server response', gripe);
      res.send(gripe);
    })
    .catch((err) => {
      console.error("error retrieving database data");
    });
});

//get get location might handle in browser
// app.get('/getLocation', (req, res) => {

//   //grab geolaction data
//   // from data get lat , long, block #, street, cross street, zip code
//   // add send back to client to be put in post req for gripes
//   // console.log(req.connection.remoteAddress.slice(7));
//   res.send('getting location');
// })

//add a gripe to db.
app.post('/gripes', (req, res)=>{
  const gripe = req.body;
  console.log('post gripe', gripe);
  db.submitGripe(gripe)
    .then((response) => {
      console.log(response);
      res.send('Gripe added to DB');
    })
    .catch((err) => {
      console.error("error posting gripe", err);
    });
  res.send('Gripe added to DB');
})

///update gripe vote
app.patch(`/gripes/:id`, (req, res) => {
  const gripeVote = req.body;
  console.log('update vote', gripeVote);
  db.updateGripe(gripeVote)
    .then(response => {
      console.log(response);
      res.send('vote recorded');
    })
    .catch(err => console.error(err));
  // res.send('vote recorded');
    });

//get a google map for gripe
app.get('/gripe/:id/map', (req, res) => {
  // const gripeId = req.headers.id;
  // console.log(gripeId);
  // write db get gripe by id func
  // db.getGripeLocationbyId(gripeId)
  //   .then(gripe => {
  //     console.log(gripe);
  //     //make GET to google for map
  //   })
  //   .then((map) => {
  //     res.send(map)
  //   })
  //   .catch(err => console.error(err));
  // res.send('getting map')
});

///user endpoints//////////
app.post('/createUser', (req, res) => {
  const user = req.body;
  console.log('create user: ', user);
  db.createUser(user)
    .then(user => {
      // console.log(user, 'added to system');
      res.send(`${user.username} welcomed to WaterGripes`);
    })
    .catch(err => console.error(err));
  // res.send('user added to WaterGripes');
});


//ripped from passport docs
//our auth should create a session and then bring the user back to gripe page??
// app.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login',
//                                    failureFlash: true })
// );

////get user for login
app.post('/login/users/:userName', (req, res) => {
  const user = req.body;
  console.log(req.body);
  // db.loginUser(user)
  //   .then(cookie => {
  //     console.log(`${user.userName} is logged in.`);
  //     res.send(cookie);//what ever the seesion object is
  //   })
  //   .catch(err => console.error(err));
  res.send('user logged in');
});



module.exports = app;
//comments