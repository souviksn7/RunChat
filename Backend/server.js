const express = require("express");
const dotenv = require("dotenv");
const app = express();
const { chats } = require("./data/data.js");
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

app.use(express.json()); // to accept JSON data form frontend

app.get("/", (req, res) => {
  res.send("server started on port 5000 successfully");
});
app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`server started on port ${PORT}`));
