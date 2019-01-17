import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { fetchRecipes } from '../actions/actions';

class RecipeList extends Component {

  componentDidMount() {
    this.props.fetchAllRecipes();
  }

  render() {
    const { recipes } = this.props;
    return (
      <div>
        <div>This is the Recipe List Page</div>
        {recipes.map((recipe) => {
          return (
            <div>{recipe.get('name')}</div>
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