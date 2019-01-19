import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import '../styles/RecipeListItem.css'
class RecipeListItem extends Component {

  render() {
    const { recipe } = this.props;
    return (
      <div className="recipeListItem-container">
        <div className="recipeListItem-name">
          {recipe.get('name')}
        </div>
      </div>
    );
  }
}

RecipeListItem.propTypes = {
  recipe: PropTypes.instanceOf(Immutable.Map),
};

export default RecipeListItem;