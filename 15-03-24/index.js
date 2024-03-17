const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

let recipes = [];

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.post("/recipes", (req, res) => {
  const recipe = {
    id: recipes.length + 1,
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  };
  recipes.push(recipe);

  res.status(201).send(recipe);
});

app.get("/recipes/:id", (req, res) => {
  // Cerchiamo la ricetta con l'ID specificato
  const recipe = recipes.find(
    (recipe) => recipe.id === parseInt(req.params.id)
  );
  // Se non troviamo la ricetta, rispondiamo con un messaggio di errore
  if (!recipe) {
    res.status(404).send("Ricetta non trovata");
  } else {
    // Altrimenti, rispondiamo con la ricetta
    res.send(recipe);
  }
});

app.put("/recipes/:id", (req, res) => {
  // Cerchiamo la ricetta con l'ID specificato
  const recipe = recipes.find(
    (recipe) => recipe.id === parseInt(req.params.id)
  );
  // Se non troviamo la ricetta, rispondiamo con un messaggio di errore
  if (!recipe) {
    res.status(404).send("Ricetta non trovata");
  } else {
    // Altrimenti, aggiorniamo la ricetta con i dati inviati nel corpo della richiesta
    recipe.title = req.body.title;
    recipe.ingredients = req.body.ingredients;
    recipe.instructions = req.body.instructions;

    res.send(recipe);
  }
});

app.delete("/recipes/:id", (req, res) => {
  // Cerchiamo la ricetta con l'ID specificato
  const recipe = recipes.find(
    (recipe) => recipe.id === parseInt(req.params.id)
  );
  // Se non troviamo la ricetta, rispondiamo con un messaggio di errore
  if (!recipe) {
    res.status(404).send("Ricetta non trovata");
  } else {
    // Altrimenti, rimuoviamo la ricetta dall'array recipes
    const index = recipes.indexOf(recipe);
    recipes.splice(index, 1);

    res.send(recipe);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
