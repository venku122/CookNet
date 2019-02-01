import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { fetchRecipeByID } from '../actions/actions';
import RecipeDetailedInfo from '../components/RecipeDetailedInfo';
import RecipeInfoSwitcher from '../components/RecipeInfoSwitcher';
import '../styles/RecipeDetail.css';

class RecipeDetail extends Component {

  componentDidMount() {
    const { match, fetchRecipeDetails } = this.props;
    const { recipeID } = match.params;
    fetchRecipeDetails(recipeID);
  }

  render() {
    const { match, recipes } = this.props;
    const { recipeID } = match.params;
    const recipe = recipes.get(recipeID);
    if (!recipe) {
      return null;
    }
    const name = recipe.get('name');
    return (
      <div className="recipeDetail-page">
        <div className="recipeDetail-container">
          <div className="recipeDetail-title">
            {name}
            <RecipeDetailedInfo recipe={recipe} />
          </div>
          <div className="recipeDetail-info">
            <RecipeInfoSwitcher recipe={recipe}/>

          </div>

        </div>
      </div>
    )
  }
};

RecipeDetail.propTypes = {
  match: PropTypes.object.isRequired,
  recipes: PropTypes.instanceOf(Immutable.Map).isRequired,
  fetchRecipeDetails: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    recipes: state.appState.get('recipes'),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchRecipeDetails: (recipeID) => {
      dispatch(fetchRecipeByID(recipeID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);