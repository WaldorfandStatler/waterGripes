const express = require('express');
const path = require('path');
const { urlencoded, json } = require('body-parser')

const db = require('../database-mysql/sequelize')


const app = express();

app.use(urlencoded({ extended: false }))
app.use(json())


app.use(express.static(path.resolve(__dirname, '../dist/waterGripes')));

//endpoint to retrive all existing gripes
app.get('/gripes', (req, res) => {
  // db.getAllGripes()
  //   .then((gripes) => {
  //     console.log('got all gripes server response', gripes);
  //     res.send(response, 'here are the Gripes');
  //   })
  //   .catch((err) => {
  //     console.error("error retrieving database data");
  //   });
  res.send('here are the Gripes');
});

//get get location
app.get('/getLocation', (req, res) => {

  //grab geolaction data
  // from data get lat , long, block #, street, cross street, zip code
  // add send back to client to be put in post req for gripes
  // console.log(req.connection.remoteAddress.slice(7));
  res.send('getting location');
})
//add a gripe to db.
app.post('/gripes', (req, res)=>{
  const gripe = req.body;
  console.log('post gripe', gripe);
  // db.submitGripe(gripe)
  //   .then((response) => {
  //     console.log(response);
  //     res.send('Gripe added to DB');
  //   })
  //   .catch((err) => {
  //     console.error("error posting gripe", err);
  //   });
  res.send('Gripe added to DB');
})

///update gripe vote
app.patch(`/gripes/:id`, (req, res) => {
  const gripeVote = req.body;
  console.log('update vote', gripeVote);
  // db.updateGripe(gripVote)
  //   .then(response => {
  //     console.log(response);
  //     res.send('vote recorded');
  //   })
  //   .catch(err => console.error(err));
  res.send('vote recorded');
    });

//get a google map for gripe
app.get('/gripe/:id/map', (req, res) => {
  const gripeId = req.headers.id;
  console.log(gripeId);
  
  //write db get gripe by id func
  // db.getGripeLocationbyId(gripeId)
  //   .then(gripe => {
  //     console.log(gripe);
  //     //make GET to google for map
  //   })
  //   .then((map) => {
  //     res.send(map)
  //   })
  //   .catch(err => console.error(err));
  res.send('getting map')
});

module.exports = app;
//comments