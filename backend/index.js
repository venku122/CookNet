require('dotenv').config();
const {
  handleGetRecipeByID,
  handleGetRecipes,
  handleCreateRecipe,
  handleUpdateRecipeByID,
  handleDeleteRecipeByID
} = require('./api');
const express = require('express');

const app = express();

const port = process.env.PORT ? process.env.PORT : 3000;

app.use(express.json());


app.get('/recipes/:recipeID', handleGetRecipeByID);
app.get('/recipes', handleGetRecipes);
app.post('/newRecipe', handleCreateRecipe);
app.put('/recipes/:recipeID', handleUpdateRecipeByID);
app.delete('/recipes/:recipeID', handleDeleteRecipeByID);

app.listen(port, () => console.log(`CookNet backend running on port ${port}`));
