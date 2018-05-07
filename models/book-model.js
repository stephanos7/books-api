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
    type: String,
    required: [true, "The author is required."]
  },
  coverImage: {
    type: String, defualt: "https://brettwilliamillustration.files.wordpress.com/2013/04/thejunglebook.jpg"
  },
  summary: {
    type: String,
    required: [true, "The summary is required."]
  }
});

// use this schema to create a new (mongoose) book model;

const Book = mongoose.model("Book", bookSchema);
// the first argument is the singular name of the collection our model is for. 
// mongoose automatically looks for the plural version of this model name - ie. books.

// export the book model
module.exports = Book;