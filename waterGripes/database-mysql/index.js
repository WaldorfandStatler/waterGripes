const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);


connection.connect( (err)=>{
  if (err) { 
    console.error(err); 
    return;  
  }
  console.log( "connected to database" );
});

