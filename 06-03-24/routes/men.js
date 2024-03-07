const express = require("express");
const router = express.Router();
const clothes = require("../data/men.json");

router.get("/", (req, res) => {
  res.render("men", { title: "Abbigliamento per uomo", clothes: clothes });
});

module.exports = router;
