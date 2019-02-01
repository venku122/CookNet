import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import '../styles/RecipeInfoSwitcher.css';
import RecipeStepBox from './RecipeStepBox';
import RecipeIngredientBox from './RecipeIngredientBox';

const Panes = {
  Ingredients: RecipeIngredientBox,
  Steps: RecipeStepBox,
};

class RecipeInfoSwitcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CurrentPane: Panes.Steps,
    };


    this.handleOpenIngredients = this.handleOpenIngredients.bind(this);
    this.handleOpenSteps = this.handleOpenSteps.bind(this);

  }

  handleOpenIngredients() {
    const { CurrentPane } = this.state;

    if (CurrentPane !== Panes.Ingredients) {
      this.setState({
        CurrentPane: Panes.Ingredients,
      });
    }
  }

  handleOpenSteps() {
    const { CurrentPane } = this.state;

    if (CurrentPane !== Panes.Steps) {
      this.setState({
        CurrentPane: Panes.Steps,
      });
    }
  }

  render() {
    const { recipe } = this.props;
    const { CurrentPane } = this.state;
    return (
      <div className="recipeInfoSwitcher-container">
        <div className="recipeInfoSwitcher-header">
          <div className="recipeInfoSwitcher-buttonRow">
            <div className="recipeInfoSwitcher-button" onClick={this.handleOpenIngredients}>Ingredients</div>
            <div className="recipeInfoSwitcher-button" onClick={this.handleOpenSteps}>Method</div>
          </div>
          <div className="recipeInfoswitcher-status" style={{float: `${CurrentPane === Panes.Ingredients ? 'left' : 'right'}`}}/>
          <div className="recipeInfoswitcher-status-base"/>
        </div>
        <CurrentPane recipe={recipe}/>
      </div>
    );
  }
}

RecipeInfoSwitcher.propTypes = {
  recipe: PropTypes.instanceOf(Immutable.Map).isRequired,
}

export default RecipeInfoSwitcher;