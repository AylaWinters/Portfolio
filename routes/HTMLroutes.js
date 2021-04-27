var path = require("path");

module.exports = app => {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "index.html"));
    });
    app.get("/resume", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/resume.html"));
    });
   
}

