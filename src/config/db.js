require('dotenv').config();
const mongoose = require("mongoose");

const dbURI = process.env.MONGODB_URI || "mongodb+srv://myaswanth34:ByakFvBuzM2iAk91@cluster0.3bycd2y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ;

const connectDB = () => {
  return mongoose.connect(
    // replace this string to your mongodb URI string
    dbURI,
    (err) => {
      if (!err) {
        return console.log("Database connected");
      }
      return console.log(err);
    }
  );
};

module.exports = connectDB;
