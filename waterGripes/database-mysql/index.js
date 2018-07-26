const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);


connection.connect( (err)=>{
<<<<<<< HEAD
  if (err) {
    console.error(err);
    return;
=======
  if (err) { 
    console.error(err); 
    return;  
>>>>>>> 4a6aea91023d599ae7e986ae01a32a91e6786ed5
  }
  console.log( "connected to database" );
});

