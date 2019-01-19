import ActionTypes from './actionTypes';
import Immutable from 'immutable';

const baseURL = 'http://localhost:3001';

const getURL = (url, options) => {
  options.method = 'GET';
  return fetch(url, options);
};

const postURL = (url, options) => {
  options.method = 'POST';
  return fetch(url, options);
};

const putURL = (url, options) => {
  options.method = 'PUT';
  return fetch(url, options);
};

const deleteURL = (url, options) => {
  options.method = 'DELETE';
  return fetch(url, options);
};

const recipeListToMap = (list) => {
  const map = {};
  for (let i = 0; i < list.length; i++) {
    const listItem = list[i];
    map[listItem._id] = listItem;
  }
  return map;
}

export const fetchRecipes = () => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.FETCH_RECIPES_ATTEMPTED,
    });

    getURL(`${baseURL}/recipes`, {})
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: ActionTypes.FETCH_RECIPES_SUCCEEDED,
        recipes: Immutable.fromJS(recipeListToMap(json)),
      });
    })
    .catch(err => {
      dispatch({
        type: ActionTypes.FETCH_RECIPES_FAILED,
        err,
      });
    }) 
  }
}

export const fetchRecipeByID = (recipeID) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.FETCH_RECIPE_BY_ID_ATTEMPTED,
      recipeID,
    });

    getURL(`${baseURL}/recipes/${recipeID}`, {})
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: ActionTypes.FETCH_RECIPE_BY_ID_SUCCEEDED,
        recipe: Immutable.fromJS(json),
        recipeID,
      });
    })
    .catch(err => {
      dispatch({
        type: ActionTypes.FETCH_RECIPE_BY_ID_FAILED,
        err,
      });
    })
  }
};