const express = require("express");
const routes = express.Router();
const Controller = require("../controller/books");
const services = require('../services/render');
const controller = new Controller();

// add your RESTful api routes here
routes.get('/', services.homeRoutes);
routes.get('/add-book', services.add_book)
routes.get("/api/books",controller.getBooks);
routes.get('/api/books/:id', controller.findBookById);
routes.post('/api/books', controller.createNewBook);
routes.patch('/api/books/:id', controller.updateABook);

module.exports = routes;
