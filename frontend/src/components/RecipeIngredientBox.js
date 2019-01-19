import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import '../styles/RecipeIngredientBox.css';

class RecipeIngredientBox extends Component {

  render() {
    const { recipe } = this.props;
    if (!recipe) return null;
    const ingredients = recipe.get('ingredients');
    if (!ingredients) return null;
    return (
      <div className="recipeIngredientBox-container">
        <div clasName="recipeIngredientBox-title">
          Ingredients
        </div>
        {ingredients.map((ingredient) => {
          const unit = ingredient.get('unit');
          const quantity = ingredient.get('quantity');
          const name = ingredient.get('name');
          return (
            <div className="recipeIngredientBox-item-container">
              <div className="recipeIngredientBox-item-content">
                {`${quantity} ${unit} ${name}`}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

RecipeIngredientBox.propTypes = {
  recipe: PropTypes.instanceOf(Immutable.Map).isRequired,
}

export default RecipeIngredientBox;