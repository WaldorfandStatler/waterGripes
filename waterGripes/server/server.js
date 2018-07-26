const express = require('express');
const path = require('path');
const { urlencoded, json } = require('body-parser')

const db = require('../database-mysql');
const seq= require('../database-mysql/sequelize')


const app = express();

app.use(urlencoded({ extended: false }))
app.use(json())


app.use(express.static(path.resolve(__dirname, '../dist/waterGripes')));

//endpoint to retrieva all existing gripes
app.get('/gripes', (req, res) => {
  db.getAllGripes()
    .then((response) => {
      console.log('get all gripes server response');
      res.send(response);
    })
    .catch((err) => {
      console.error("error retrieving database data");
    });
});

app.post('/gripes', (req, res)=>{
  console.log('app.post /gripes req: ', req);
  const gripe = req.headers;
  db.submitGripe(gripe)
    .then((response) => {
      console.log('submit gripes server response');
      res.send(response);
    })
    .catch((err) => {
      console.error("error posting gripe", err);
    });
})


app.patch(`/gripes:phraseId`, (req, res) => {
  console.log( 'patch server', req.headers.id, req.headers.vote);
  const id = req.headers.id;
  const status = req.headers.vote;
  db.updateGripe(id, status);
    });


module.exports = app;
//comments