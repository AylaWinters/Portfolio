var path = require("path");
const sendMail = require("../public/mail");

module.exports = app => {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "index.html"));
    });
    app.get("/resume", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/resume.html"));
    });
    app.post("/contact", async (req, res) => {
        console.log("contact req.body", req.body);
      
        const { name, email, message } = req.body;
      
        sendMail(name, email, message, (err, data) => {
          if (err) {
            console.log(err);
            res.status(500).json({ message: "internal error" });
          } else {
            res.redirect("/success");
          }
        });
      });
      
   
}

