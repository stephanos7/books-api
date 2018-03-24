"use-strict";

const mongoose = require("mongoose");

// define the (mongoose) Schema for the book model
const bookSchema = new mongoose.Schema({
  mainTitle : {
    type: String,
    required: [true, "The main title is required."]
  },
  secondaryTitle : {
    type: String,
    required: [true, "The secondary title is required."]
  },
  authorName : {
    type: String
  },
  coverImage: {
    type: String, defualt: ""
  },
  summary: {
    type: String, default: "No summary has been provided for this publication"
  }
});

// use this schema to create a new (mongoose) book model;

const Book = mongoose.model("Book", bookSchema);
// the first argument is the singular name of the collection our model is for. 
// mongoose automatically looks for the plural version of this model name - ie. books.

// export the book model
module.exports = Book;