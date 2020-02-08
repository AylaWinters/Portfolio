var path = require("path")

module.exports = app => {
    app.get("/", function (req, res) {

        res.sendFile(path.join(__dirname, "index.html"));
    });

    app.get("/background", (req, res) => {
        res.sendFile(path.join(__dirname, "../smallerbigtree.webp"));

    })

}

