const express = require("express");
const dotenv = require("dotenv");
const app = express();
const { chats } = require("./data/data.js");

dotenv.config();

app.get("/", (req, res) => {
  res.send("server started on port 5000 successfully");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});
app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`server started on port ${PORT}`));
