import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import AddMetadataInput from '../components/AddMetadataInput';
import AddIngredientsInput from '../components/AddIngredientsInput';
import AddInstructionsInput from '../components/AddInstructionsInput';
import AddPhotosInput from '../components/AddPhotosInput';

import '../styles/AddRecipe.css';

class AddRecipe extends Component {

  render() {
    return (
      <div className="addRecipe-container">
        <div className="addRecipe-title">This is the page to add a recipe</div>
        <AddMetadataInput />
        <AddIngredientsInput />
        <AddInstructionsInput />
        <AddPhotosInput />
      </div>
    );
  }
}

export default connect()(AddRecipe);

/*
Recipe Adder
Metadata
Name
Type
Meal
Serving Size
Add ingredients
Allow substitutions?
Volume/weight conversion?
Add instructions
Add time for each step
Add alternate or secondary step for larger/smaller batch?
Upload photos
*/