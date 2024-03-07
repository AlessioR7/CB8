const express = require("express");
const router = express.Router();
const clothes = require("../data/children.json");

router.get("/", (req, res) => {
  res.render("children", {
    title: "Abbigliamento per bambini",
    clothes: clothes,
  });
});

module.exports = router;
