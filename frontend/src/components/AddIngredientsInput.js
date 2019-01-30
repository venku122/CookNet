import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import '../styles/AddIngredientsInput.css';

class AddIngredientsInput extends Component {

  render() {
    return (
      <div>
        <label htmlFor="inp" className="inp">
          <input type="text" id="inp" placeholder="&nbsp;"/>
          <span className="label">Name of Ingredient</span>
          <span className="border"></span>
        </label>
        <input type="text" id="ingredientName" placeholder="Name of Ingredient" />
        <input type="number" id="ingredientQuantity"placeholder="How much?" />
        <input type="text" id="ingredientUnit" placeholder="Unit" />
      </div>
    );
  }
}

export default AddIngredientsInput;
