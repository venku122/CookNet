const mongoose = require('mongoose');
const MealType = require('../utils/MealType');
const FoodType = require('../utils/FoodType');

const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('Connected to mongodb');
});

const recipeSchema = new mongoose.Schema({
  steps: [{
    instruction: String,
    estimatedTime: Number,
  }],
  ingredients: [{
    name: String,
    quantity: { type: Number, min: 0 },
    unit: String,
  }],
  mealType: { type: String, enum: Object.keys(MealType) },
  foodType: { type: String, enum: Object.keys(FoodType) },
  servingSize: Number,
  name: String,
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  time: {
    total: Number,
    prep: Number,
    cooking: Number,
  },
  photos: {
    featured: String,
    other: [String],
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = {
  Recipe,
};
