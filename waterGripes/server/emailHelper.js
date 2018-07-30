const { SENDGRID_API_KEY } = require('../config.js');

// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(SENDGRID_API_KEY);

// const msg = {
//   to: 'twogrumpyolmen@gmail.com',
//   from: 'twogrumpyolmen@gmail.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };

const sendEmail = (gripe) => {
  console.log('send email', gripe);

  const msg = {
    to: 'buttsjosef@gmail.com',
    from: 'twogrumpyolmen@gmail.com',
    subject: 'New Orleans Water Leak Report',
    html: `${gripe.gripe} at ${gripe.blockNumber} ${gripe.street}, New Orleans, LA ${gripe.inputZip}. 
    Additional comments: ${gripe.comment}. Sent by the two grumpy old men at Water Gripe!`
    
  }


  sgMail.send(msg)
  .then( ()=>{ console.log("email sent")})
  .catch( (error)=>{
  console.log('error with email ', error);
  })

}



module.exports = sendEmail;

