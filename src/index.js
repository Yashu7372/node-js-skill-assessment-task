const path = require("path");

/**
 * uncomment the following lines of code if you want to use mongodb as your database
 */
const connectDB = require("./config/db");
connectDB();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const dirname = __dirname;
require("app-module-path").addPath(dirname);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use('/js', express.static(path.resolve(__dirname, "public/index.js"))) //to load js

const bookRoutes = require("./routes/book");

app.use("/", bookRoutes);

app.listen(5000, () => console.log("Server is running on 5000"));
