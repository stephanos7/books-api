const mongoose = require("mongoose");
const dbName = "book-store";

mongoose.connect(`mongodb://localhost/${dbName}`);

const Book = require("../models/book-model");

const sampleBooks = [
  { 
    mainTitle: "Harry Potter",
    secondaryTitle: "The Phoenix Story",
    authorName: "JK Rowling",
    summary: "A summary...."
  },
  { 
    mainTitle: "Tale of Two Cities",
    secondaryTitle: "An Urban Classic",
    authorName: "Charles Dickens",
    summary: "A summary...."
  }
];

Book.create( sampleBooks, (err, docs) => {
  if(err){
    throw err;
  }
  docs.forEach( doc => {
    console.log(doc.mainTitle);
  });
  mongoose.connection.close();
})