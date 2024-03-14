const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const books = [];

app.get("/add-book", (req, res) => {
  res.send(`
  <form action="/books" method="POST">
    <label for="title">Titolo:</label><br>
    <input type="text" id="title" name="title"><br>
    <label for="author">Autore:</label><br>
    <input type="text" id="author" name="author"><br>
    <input type="submit" value="Aggiungi libro">
  </form>
`);
});

app.post("/books", (req, res) => {
  const book = {
    title: req.body.title,
    author: req.body.author,
  };
  books.push(book);

  res.redirect("/books");
});

app.get("/books", (req, res) => {
  res.send(
    `<ul>` +
      books
        .map(
          (book) => `<li>${book.title} - ${book.author}
    </li>`
        )
        .join("") +
      `</ul>`
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
