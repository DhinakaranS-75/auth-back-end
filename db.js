const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dhina75493:dhina75493@recipebook.54vuz5y.mongodb.net/"
    );
    console.log("MongoDB Conneted ");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDb;
