const messages = require("../data/messages");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("message section");
});
router.get("/new", (req, res) => {
  res.render("form", { title: "Message Board: Create New Message" });
});
router.post("/new", (req, res) => {
  const formData = req.body;
  messages.push({
    user: formData.user,
    message: formData.message,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
