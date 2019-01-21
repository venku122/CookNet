import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import '../styles/RecipeStepBox.css';

class RecipeStepBox extends Component {

  calculateEstimatedTime(stepTime) {
    if (stepTime === 1) {
      return `${stepTime} minute`;
    }
    return `${stepTime} minutes`
  }

  render() {
    const { recipe } = this.props;
    if (!recipe) return null;
    const steps = recipe.get('steps');
    if (!steps) return null;
    return (
      <div className="RecipeStepBox-container">
        <div className="RecipeStepBox-title">
          Steps
        </div>
        {steps.map((step, index) => {
          const stepNumber = index + 1; // 0-index hack
          const instruction = step.get('instruction');
          const estimatedTime = this.calculateEstimatedTime(step.get('estimatedTime'));
          return (
            <div className="RecipeStepBox-item-container">
              <div className="RecipeStepBox-item-content">
                {`${stepNumber}: ${instruction} (${estimatedTime})`}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

RecipeStepBox.propTypes = {
  recipe: PropTypes.instanceOf(Immutable.Map).isRequired,
}

export default RecipeStepBox;