const express = require("express");
const mongoose = require("mongoose"); 

const db = require("./configs/db");
const booksAPI = require("./routes/books-api");

const server = express();

server.use("/api", booksAPI);