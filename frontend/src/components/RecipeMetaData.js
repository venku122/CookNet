import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import '../styles/RecipeMetaData.css';

class RecipeMetaData extends Component {

  render() {
    const { recipe } = this.props;
    if (!recipe) return null;
    const time = recipe.get('time');
    const foodType = recipe.get('foodType');
    const mealType = recipe.get('mealType');
    const servingSize = recipe.get('servingSize');
    const createdDate = new Date(recipe.get('created')).toDateString();
    const updatedDate = recipe.get('updated');
    if (!time || !foodType || !mealType || !servingSize || !createdDate || !updatedDate) return null;

    const totalTime = time.get('total');
    const prepTime = time.get('prep');
    const cookTime = time.get('cooking');
    return (
      <div className="RecipeMetaData-container">
        <div className="RecipeMetaData-item">
          <div className="RecipeMetaData-item-header">
            Cuisine
          </div>
          <div className="RecipeMetaData-item-value">
            {foodType}
          </div>
        </div>
        <div className="RecipeMetaData-item">
          <div className="RecipeMetaData-item-header">
            Meal
          </div>
          <div className="RecipeMetaData-item-value">
            {mealType}
          </div>
        </div>
        <div className="RecipeMetaData-item">
          <div className="RecipeMetaData-item-header">
            Serves
          </div>
          <div className="RecipeMetaData-item-value">
            {servingSize}
          </div>
        </div>
        <div className="RecipeMetaData-item">
          <div className="RecipeMetaData-item-header">
            Prep
          </div>
          <div className="RecipeMetaData-item-value">
            {prepTime}
          </div>
        </div>
        <div className="RecipeMetaData-item">
          <div className="RecipeMetaData-item-header">
            Cook Time
          </div>
          <div className="RecipeMetaData-item-value">
            {cookTime}
          </div>
        </div>
      </div>
    );
  }
}

RecipeMetaData.propTypes = {
  recipe: PropTypes.instanceOf(Immutable.Map).isRequired,
}

export default RecipeMetaData;