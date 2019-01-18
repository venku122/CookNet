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
    default:
      return state;
  }
}