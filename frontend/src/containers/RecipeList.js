import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import '../styles/RecipeList.css';
import RecipeListItem from '../components/RecipeListItem';
import { fetchRecipes } from '../actions/actions';

class RecipeList extends Component {

  componentDidMount() {
    this.props.fetchAllRecipes();
  }

  render() {
    const { recipes } = this.props;
    return (
      <div className="recipeList-container">
        <div className="recipeList-title">CookNet</div>
        <div className="recipeList-subtitle">Recipes Done Right</div>
        {recipes.map((recipe) => {
          return (
            <RecipeListItem
              recipe={recipe}
              key={recipe.get('id')}
            />
          );
        })}
      </div>

    )
  };

};

RecipeList.propTypes = {
  recipes: PropTypes.instanceOf(Immutable.List).isRequired,
}

const mapStateToProps = (state) => {
  return {
    recipes: state.appState.get('recipes'),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllRecipes: () => {
      dispatch(fetchRecipes());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);