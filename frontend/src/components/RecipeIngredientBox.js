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
        {ingredients.map((ingredient) => {
          const unit = ingredient.get('unit');
          const quantity = ingredient.get('quantity');
          const name = ingredient.get('name');
          const id = ingredient.get('_id');
          return (
            <div className="recipeIngredientBox-item-container" key={id}>
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