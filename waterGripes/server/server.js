const express = require('express');
const path = require('path');
const { urlencoded, json } = require('body-parser')
const app = express();

app.use(urlencoded({ extended: false }))
app.use(json())


app.use(express.static(path.resolve(__dirname, '../dist/waterGripes')));



module.exports = app;
//comments