const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);


connection.connect( (err)=>{
  if (err) {return reject(err); }
  console.log( "connected to database" );
});

