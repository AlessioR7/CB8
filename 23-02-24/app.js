const express = require("express");
const bodyParser = require("body-parser");
const checkUser = require("./auth");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/form.html");
});

app.post("/mostra-dati", (req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  res.send(`Nome: ${name}, Cognome: ${surname}`);
});

app.get("/dashboard", checkUser, (req, res) => {
  res.send("Benvenuto, admin!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
