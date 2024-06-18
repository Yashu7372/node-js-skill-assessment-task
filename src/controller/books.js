// uncomment the following line of code if you want to use the file system
// as a database instead of mongodb
// const fs = require('fs')

// uncomment the following line if you want to use mongodb
const mongoose = require("mongoose");
const createError = require('http-errors');
const Books = require("../models/books");

class Controller {
  constructor() {
    // constructor logic if needed
  }

  async getBooks(req, res) {
    try {
      const results = await Books.find().sort({ isIssued: 1 });
      res.send(results);
    } catch (error) {
      console.log(error.message);
      res.status(500).send(error.message); // Properly handle the error response
    }
  }

  async findBookById(req, res, next) {
    const id = req.params.id;
    try {
      const result = await Books.findById(id);
      if (!result) {
        throw createError(404, 'Book does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Book id'));
        return;
      }
      next(error);
    }
  }

  async createNewBook(req, res, next) {
    try {
      const book = new Books({
        title: req.body.name,
        page: req.body.page,
        authorID: new mongoose.Types.ObjectId(),
        price: req.body.price,
        isDeleted: false,
        isIssued: false
      });
      const result = await book.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error.name === 'ValidationError') {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
  }

  async updateABook(req, res, next){
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Books.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Book does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Book Id'));
      }

      next(error);
    }
  }
  // add your other controllers here
}

module.exports = Controller;
