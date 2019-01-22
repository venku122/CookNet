import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import AddRecipe from './AddRecipe';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={RecipeList}/>
        <Route path='/recipes/:recipeID' component={RecipeDetail}/>
        <Route path='/addRecipe' component={AddRecipe} />
      </Switch>
    );
  }
}

export default Main;
