const express = require("express");
const hbs = require("hbs");

const app = express();
const port = 3000;

app.set("view engine", "hbs");

const menRouter = require("./routes/men");
const womenRouter = require("./routes/women");
const childrenRouter = require("./routes/children");

app.use("/men", menRouter);
app.use("/women", womenRouter);
app.use("/children", childrenRouter);

app.get("/", (req, res) => {
  res.render("index", { title: "Benvenuto nel tuo negozio online!" });
});

app.use((req, res, next) => {
  res
    .status(404)
    .send("Spiacente, non riusciamo a trovare quello che stai cercando!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
