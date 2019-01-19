import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { Link } from 'react-router-dom';

import '../styles/RecipeListItem.css'
class RecipeListItem extends Component {

  render() {
    const { recipe } = this.props;
    return (
      <Link to={`recipes/${recipe.get('_id')}`} >
        <div className="recipeListItem-container">
          <div className="recipeListItem-name">
            {recipe.get('name')}
          </div>
        </div>
      </Link>
    );
  }
}

RecipeListItem.propTypes = {
  recipe: PropTypes.instanceOf(Immutable.Map),
};

export default RecipeListItem;