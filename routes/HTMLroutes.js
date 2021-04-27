var path = require("path");
const nodemailer = require('nodemailer');
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;

module.exports = app => {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "index.html"));
    });
    app.get("/resume", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/resume.html"));
    });
    app.post('/contact', (req, res) => {

        // Instantiate the SMTP server
        const smtpTrans = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_PASS
            }
        })
    
        // Specify what the email will look like
        const mailOpts = {
            from: 'Your sender info here', // This is ignored by Gmail
            to: GMAIL_USER,
            subject: 'New message from contact form',
            text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
        }
    
        // Attempt to send the email
        smtpTrans.sendMail(mailOpts, (error, response) => {
            if (error) {
                console.log(error); // Show a page indicating failure
            }
            else {
                console.log("Success"); // Show a page indicating success
            }
        })
    })
}

