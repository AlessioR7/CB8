const express = require("express");
const app = express();
const port = 3000;
const books = require("./books");

app.use(express.static("public"));

// Endpoint per ottenere tutti i libri
app.get("/api", (req, res) => {
  res.json(books);
});

// Endpoint per ottenere un libro specifico per id
app.get("/api/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((book) => book.id === id);

  if (book) {
    res.json(book);
  } else {
    res.status(404).send("Libro non trovato");
  }
});

// Endpoint per la ricerca di libri per titolo o autore
app.get("/api/search", (req, res) => {
  const { title, author } = req.query;
  let results = [...books];

  if (title) {
    results = results.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
  }
  if (author) {
    results = results.filter((book) =>
      book.author.toLowerCase().includes(author.toLowerCase())
    );
  }
  res.json(results);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
