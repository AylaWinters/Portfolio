const express = require("express");
const router = express.Router();
const sendMail = require("../public/mail");

router.post("/contact", async (req, res) => {
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



module.exports = router;
