import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { fetchRecipeByID } from '../actions/actions';
import RecipeIngredientBox from '../components/RecipeIngredientBox';
import RecipeStepBox from '../components/RecipeStepBox';
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
    return (
      <div className="recipeDetail-container">
        <div className="recipeDetail-title">
          {`This is the recipe detail page for ${recipeID}`}
        </div>
        <RecipeIngredientBox recipe={recipe}/>
        <RecipeStepBox recipe={recipe}/>
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