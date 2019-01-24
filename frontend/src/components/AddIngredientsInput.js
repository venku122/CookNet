import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

class AddIngredientsInput extends Component {

  render() {
    return (
      <div>
        <input type="text" id="ingredientName"/>
        <input type="text" id="ingredientUnit" />
        <input type="number" id="ingredientQuantity" />
      </div>
    );
  }
}

export default AddIngredientsInput;
