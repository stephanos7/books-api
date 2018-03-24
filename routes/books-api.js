const express = require("express");
const router = express.Router();

// require book model
const Book = require("../models/book-model");

// get all books
router.get("/books", (req, res, next)=>{
  Book.find((err, allBooks) => {
    if(err){
      res.json(err);
      return;
    }
    res.json(allBooks);
  });
});

// add new book
router.post("/books", (req, res, next) => {
  // instantiate a new Book object made of the body parameters
  const newBook = new Book({
    mainTitle: req.body.mainTitle,
    secondaryTitle: req.body.secondaryTitle,
    authorName: req.body.authorName 
  })
  
  // save the book in the db with mongoose's .save method
  newBook.save((err) => {
    if(err){
      res.json(err);
      return;
    }
    // return a json message upon successfully saving the book in the db
    res.json({message:`The new book,${newBook.mainTitle} has been saved in the database`});
  })
})

// get single book

// edit existing book

// delete book

// export router to be used by server in server.js
module.exports = router;