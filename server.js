const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const connectDb = require("./config/connectDb");
connectDb();
app.use(express.json());
app.use("/contact", require("./routes/contacts"));

const contact = require("./models/contact");

app.listen(process.env.PORT, (err) => {
  err
    ? console.log(err)
    : console.log("server is running..." + process.env.PORT);
});
