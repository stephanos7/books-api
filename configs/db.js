"use strict";

const mongoose = require("mongoose");
const dbName = "book-store";

//db connection
mongoose.connect(`mongodb://localhost/${dbName}`);

const db = mongoose.connection;

db.on("error", console.error.bind("console", "database connection problem: "));
db.once("open", () => {
  console.log(`Successfully connected to ${dbName} database`);
});