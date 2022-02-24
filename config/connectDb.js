const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://manel:123456m@cluster0.zjwgu.mongodb.net/contactliste?retryWrites=true&w=majority"
    );
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
