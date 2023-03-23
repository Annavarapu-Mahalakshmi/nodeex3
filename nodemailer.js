var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mahalakshmi.cmritcse1629@gmail.com',
    pass: '8886362889'
  }
});

var mailOptions = {
  from: 'mahalakshmi.cmritcse1629@gmail.com',
  to: 'mahalakshmi.cse1629@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});