const { SENDGRID_API_KEY, anyEmail, yourEmail } = require('../config.js');

// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(SENDGRID_API_KEY);//key and emails in config file.

///send email=> fires off an email to desired recipients
const sendEmail = (gripe) => {
  console.log('send email', gripe);

  const msg = {//create email body
    to: anyEmail,
    from: yourEmail,
    subject: 'New Orleans Water Leak Report',
    html: `${gripe.gripe} at ${gripe.blockNumber} ${gripe.street}, New Orleans, LA ${gripe.inputZip}. 
    Additional comments: ${gripe.comment}. Sent by the two grumpy old men at Water Gripe!`
    
  }


  sgMail.send(msg)//send email
  .then( ()=>{ console.log("email sent")})
  .catch( (error)=>{
  console.log('error with email ', error);
  })

}



module.exports = sendEmail;

