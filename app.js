const express = require("express");
const messagesRouter = require("./routes/messagesRouter");
const path = require("node:path");
const messages = require("./data/messages");
const links = require("./data/links");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Message Board",
    messages: messages,
    links: links,
  });
});
app.use("/messages", messagesRouter);

app.listen(3000, () => {
  console.log("Welcome to my mini message board");
});
