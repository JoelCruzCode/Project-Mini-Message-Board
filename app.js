const express = require("express");
const messagesRouter = require("./routes/messagesRouter");
const path = require("node:path");

const messages = [
  {
    text: "Hi there!",
    user: "Armando",
    added: new Date(),
  },
  {
    text: "Wsg",
    user: "Richard",
    added: new Date(),
  },
];

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});
app.use("/messages", messagesRouter);
app.listen(3000, () => {
  console.log("Welcome to my mini message board");
});
