const { SENDGRID_API_KEY } = require('../config.js');

// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(SENDGRID_API_KEY);
const msg = {
  to: 'buttsjosef@gmail.com',
  from: 'twogrumpyolmen@gmail.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail.send(msg)
.then( ()=>{ console.log("email sent")})
.catch( (error)=>{
  console.log('error with email ', error);
})

module.exports = sgMail;

