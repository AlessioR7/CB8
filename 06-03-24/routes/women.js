const express = require("express");
const router = express.Router();
const clothes = require("../data/women.json");

router.get("/", (req, res) => {
  res.render("women", { title: "Abbigliamento per donna", clothes: clothes });
});

module.exports = router;
