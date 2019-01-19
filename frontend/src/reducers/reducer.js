import ActionTypes from '../actions/actionTypes';
import Immutable from 'immutable';

const DEFAULT_STATE = Immutable.Map({
  fetchingRecipes: false,
  recipes: Immutable.List([]),
  error: null,
});


export default function reducer(state = DEFAULT_STATE, action) {
  const {
    type,
    recipes,
    err,
    recipeID,
    recipe,
  } = action;

  switch(type) {
    case ActionTypes.FETCH_RECIPES_ATTEMPTED:
      return state.merge({
        fetchingRecipes: true,
      });
    case ActionTypes.FETCH_RECIPES_SUCCEEDED:
      return state.merge({
        fetchingRecipes: false,
        recipes
      });
    case ActionTypes.FETCH_RECIPES_FAILED:
      return state.merge({
        fetchingRecipes: false,
        error: err,
      });
    case ActionTypes.FETCH_RECIPE_BY_ID_ATTEMPTED:
      return state.merge({
        recipes: state.get('recipes').setIn([recipeID, 'fetching'], true),
      });
    case ActionTypes.FETCH_RECIPE_BY_ID_FAILED:
      return state.merge({
        recipes: state.get('recipes').setIn([recipeID, 'fetching'], false),
      });
    case ActionTypes.FETCH_RECIPE_BY_ID_SUCCEEDED:
      const newRecipe = state.getIn(['recipes', recipeID])
      .merge(recipe)
      .set('fetching', false);
      return state.merge({
        recipes: state.get('recipes').set(recipeID, newRecipe),
      });
    default:
      return state;
  }
}