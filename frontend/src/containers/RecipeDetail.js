import React from 'react';

const RecipeDetail = ({ match }) => {
  const { recipeID } = match.params;
  return (
    <div>{`This is the recipe detail page for ${recipeID}`}</div>
  )

};

export default RecipeDetail;