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

// get single book

// edit existing book

// delete book

// export router to be used by server in server.js
module.exports = router;