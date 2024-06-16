const express = require("express");
const routes = express.Router();
const Controller = require("../controller/books");
const controller = new Controller();

// add your RESTful api routes here
// ...

module.exports = routes;
