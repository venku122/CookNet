import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import FoodTypes from '../utils/FoodTypes';
import MealTypes from '../utils/MealTypes';
import ServingSizes from '../utils/ServingSizes';
import '../styles/AddMetadataInput.css'

class AddMetadataInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recipeName: '',
      foodType: '',
      mealType: '',
      servingSize: -1,
    };

    this.handleGenericInputChange = this.handleGenericInputChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { onMetadataChange } = this.props;
    if (prevState !== this.state) {
      onMetadataChange(this.state);
    }
  }

  handleGenericInputChange(e) {

    const newValue = e.target.value;
    const propertyName = e.target.name;
    const stateUpdate = {};
    stateUpdate[propertyName] = newValue;
    this.setState(stateUpdate);

  }

  render() {
    const { recipeName } = this.state;
    const foodTypeList = Object.keys(FoodTypes);
    const mealTypeList = Object.keys(MealTypes);
    return (
      <div className="addMetadata-container">
        <div className="addMetadata-inputContainer">
          <input
            className="addMetadata-textInput"
            placeholder="Name"
            type="text"
            id="recipeName"
            name="recipeName"
            value={recipeName}
            onChange={this.handleGenericInputChange}
          />
        </div>
        <div className="addMetadata-inputContainer">
          <select name="foodType" defaultValue="" onChange={this.handleGenericInputChange}>
            <option value="" disabled>Select a food type</option>
            {foodTypeList.map((foodType) => {
              return (
                <option key={foodType} value={foodType}>{foodType}</option>
              );
            })}
          </select>
        </div>
        <div className="addMetadata-inputContainer">
          <select name="mealType" defaultValue="" onChange={this.handleGenericInputChange}>
            <option value="" disabled>Select a meal type</option>
            {mealTypeList.map((mealType) => {
              return (
                <option key={mealType} value={mealType}>{mealType}</option>
              );
            })}
          </select>
        </div>
        <div className="addMetadata-inputContainer">
          <label htmlFor="servingSize">Serving Size: </label>
          <select name="servingSize" id="servingSize" defaultValue="" onChange={this.handleGenericInputChange}>
            <option value="" disabled>Serving Size</option>
            {ServingSizes.map((servingSize) => {
              return (
                <option key={servingSize.value} value={servingSize.value}>{servingSize.description}</option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}

AddMetadataInput.propTypes = {
  onMetadataChange: PropTypes.func.isRequired,
}

export default AddMetadataInput;
