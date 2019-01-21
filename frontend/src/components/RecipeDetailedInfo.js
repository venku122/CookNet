import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import '../styles/RecipeDetailedInfo.css';

class RecipeDetailedInfo extends Component {

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
      <div className="RecipeDetailedInfo-container">
        <div className="RecipeDetailedInfo-title">
          Info
        </div>
        <div className="RecipeDetailedInfo-item">{`Cuisine: ${foodType}`}</div>
        <div className="RecipeDetailedInfo-item">{`Meal: ${mealType}`}</div>
        <div className="RecipeDetailedInfo-item">{`Serving Size: ${servingSize}`}</div>
        <div className="RecipeDetailedInfo-item">{`Created: ${createdDate}`}</div>
        <div className="RecipeDetailedInfo-item">{`Total Time: ${totalTime} minutes (Prep: ${prepTime}, Cooking: ${cookTime})`}</div>
      </div>
    );
  }
}

RecipeDetailedInfo.propTypes = {
  recipe: PropTypes.instanceOf(Immutable.Map).isRequired,
}

export default RecipeDetailedInfo;