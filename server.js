const express = require("express");
const mongoose = require("mongoose"); 

const db = require("./configs/db");

const booksAPI = require("./routes/books-api");

const port = process.env.PORT || 3000;
const server = express();

// register routes
server.use("/api", booksAPI);

server.listen(port);
console.log("listening on ", port)