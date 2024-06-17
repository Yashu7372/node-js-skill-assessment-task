const express = require("express");
const routes = express.Router();
const Controller = require("../controller/books");
const controller = new Controller();

// add your RESTful api routes here
routes.get("/books",controller.getBooks);
routes.get('/books/:id', controller.findBookById);
routes.post('/books', controller.createNewBook);
routes.patch('/books/:id', controller.updateABook);

module.exports = routes;
