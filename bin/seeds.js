const mongoose = require("mongoose");
const dbName = "book-store";

mongoose.connect(`mongodb://localhost/${dbName}`);

const Book = require("../models/book-model");

const sampleBooks = [
  { 
    mainTitle: "Harry Potter",
    secondaryTitle: "and the order of the Phoenix",
    authorName: "J.K. Rowling",
    coverImage: "https://static.boredpanda.com/blog/wp-content/uploads/2016/10/harry-potter-book-covers-illustration-olly-moss-6.jpg",
    summary: "A summary...."
  },
  { 
    mainTitle: "Harry Potter",
    secondaryTitle: "and the chamber of secrets",
    authorName: "J.K. Rowling",
    coverImage: "http://static.boredpanda.com/blog/wp-content/uploads/2016/10/harry-potter-book-covers-illustration-olly-moss-2.jpg",
    summary: "A summary...."
  },
  { 
    mainTitle: "Make love in the kitchen",
    secondaryTitle: "Cooking Book",
    authorName: "Sarah Milton",
    coverImage: "http://adrianadanaila.ro/wp/wp-content/uploads/2015/01/Cookin-Book.jpg",
    summary: "A summary...."
  },
  { 
    mainTitle: "Pieces of Sky",
    secondaryTitle: "A great story",
    authorName: "Trinity Doyle",
    coverImage: "http://assets.allenandunwin.com.s3.amazonaws.com/images/original/9781760112486.jpg",
    summary: "A summary...."
  },
  {
    mainTitle: "Gulliver's Travels",
    secondaryTitle: "A great story",
    authorName: "Jonathan Swift",
    coverImage: "https://i.pinimg.com/736x/27/ae/ea/27aeead381ca4692950774fa41aa6e89--book-cover-design-illustration-bookcover-design.jpg",
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