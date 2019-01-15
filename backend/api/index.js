const { Recipe } = require('../db');

/*
  handleGetRecipeByID,
  handleGetRecipes,
  handleCreateRecipe,
  handleUpdateRecipeByID,
  handleDeleteRecipeByID
*/

const handleGetRecipeByID = async (req, res) => {
  const { recipeID } = req.params;

  if (!recipeID) {
    return res.send(400);
  }

  const recipe = await Recipe.findById(recipeID);

  if (!recipe) {
    return res.send(404);
  }

  res.send(recipe.toObject());
};

const handleGetRecipes = async (req, res) => {
  const recipes = await Recipe.find({}, '_id, name');

  if (!recipes) {
    return res.send(500);
  }

  return res.send(recipes.toObject());
};

const handleCreateRecipe = async (req, res) => {
  const { recipe } = req.body;

  if (!recipe) {
    return res.send(400);
  }

  const savedRecipe = await Recipe.create(recipe);

  res.status(200).send(savedRecipe.toObject());
};

const handleUpdateRecipeByID = async (req, res) => {
  const { recipeID } = req.params;
  const { recipe } = req.body;
  if (!recipeID || recipe) {
    return res.send(400);
  }

  const newRecipe = await Recipe.findByIdAndUpdate(recipeID, recipe);

  res.send(newRecipe.toObject());
};

const handleDeleteRecipeByID = async (req, res) => {
  const { recipeID } = req.params;

  if (!recipeID) {
    return res.send(400);
  }

  await Recipe.findByIdAndDelete(recipeID);

  res.send(200);
};

module.exports = {
  handleGetRecipeByID,
  handleGetRecipes,
  handleCreateRecipe,
  handleUpdateRecipeByID,
  handleDeleteRecipeByID
}
