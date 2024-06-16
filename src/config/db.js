const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose.connect(
    // replace this string to your mongodb URI string
    "mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]",
    (err) => {
      if (!err) {
        return console.log("Database connected");
      }
      return console.log(err);
    }
  );
};

module.exports = connectDB;
