const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/Book");
require("dotenv").config();

const app = express();
const db = mongoose.connection;
const port = 3000;

mongoose.connect(process.env.DATABASE_URL);

db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connected to MongoDB"));

app.use(express.json());

app.post("/books", async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
  });
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/books", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    const books = await Book.find().skip(skip).limit(limit);
    const total = await Book.countDocuments();

    res.json({
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      books,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book == null) {
      return res.status(404).json({ message: "Cannot find book" });
    }
    res.json(book);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

app.put("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book == null) {
      return res.status(404).json({ message: "Cannot find book" });
    }
    if (req.body.title != null) {
      book.title = req.body.title;
    }
    if (req.body.author != null) {
      book.author = req.body.author;
    }
    if (req.body.year != null) {
      book.year = req.body.year;
    }
    const updateBook = await book.save();
    res.json(updateBook);
  } catch {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book == null) {
      return res.status(404).json({ message: "Cannot find book" });
    }
    await Book.deleteOne({ _id: req.params.id });
    res.json({ message: "Deleted Book" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
