const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

const app = express();
const port = 3000;

app.set("view engine", "hbs");

app.use(express.json());

let rawData = fs.readFileSync("data.json");
let data = JSON.parse(rawData);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/endpoints", (req, res) => {
  res.render("endpoints");
});

app.get("/api/data", (req, res) => {
  res.send(data);
});

app.post("/api/data", (req, res) => {
  data.push(req.body);

  res.send("Film aggiunto con successo");
});

app.put("/api/data/:id", (req, res) => {
  let film = data.find((film) => film.id === parseInt(req.params.id));

  film.title = req.body.title;
  film.year = req.body.year;
  film.director = req.body.director;
  film.genre = req.body.genre;

  res.send("Film aggiornato con successo");
});

app.delete("/api/data/:id", (req, res) => {
  data = data.filter((film) => film.id !== parseInt(req.params.id));

  res.send("Film cancellato con successo");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
