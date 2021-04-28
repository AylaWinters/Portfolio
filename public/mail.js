// const nodemailer = require("nodemailer");

// const mailgun = require("nodemailer-mailgun-transport");
// require("dotenv").config();

// const auth = {
//   auth: {
//     api_key: process.env.MAILGUN_APIKEY,
//     domain: process.env.MAILGUN_DOMAIN,
//   },
// };

// const transporter = nodemailer.createTransport(mailgun(auth));

// const sendMail = (name, email, message, cb) => {
//   const mailOptions = {
//     from: email,
//     to: "andre.entrekin@gmail.com",
//     subject: "New Message from AndreEntrekin.com",
//     text: `${name} says:
//     ${message}`,
//   };

//   transporter.sendMail(mailOptions, (err, data) => {
//     if (err) {
//       cb(err, null);
//     } else {
//       cb(null, data);
//     }
//   });
// };

// module.exports = sendMail;
