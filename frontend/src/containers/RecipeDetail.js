import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { fetchRecipeByID } from '../actions/actions';
import RecipeMetaData from '../components/RecipeMetaData';
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
    const primaryPhoto = recipe.getIn(['photos', 'featured']);
    return (
      <div className="recipeDetail-page">
        <div className="recipeDetail-container">
          <div className="recipeDetail-info-container">
            <div className="recipeDetail-image">
              <img src={primaryPhoto} alt=""/>
            </div>
            <div className="recipeDetail-title">
              {name}
            </div>
          </div>
          <div className="recipeDetail-info">
            <RecipeInfoSwitcher recipe={recipe}/>
            <RecipeMetaData recipe={recipe} />
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