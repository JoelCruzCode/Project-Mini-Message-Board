const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("message section");
});
router.get("/new", (req, res) => {
  res.render("form", { title: "Mini Message Board: New Message" });
});

module.exports = router;
