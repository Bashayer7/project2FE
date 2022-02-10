import React from 'react'
import RecipeModal from "./RecipeModal";
import { observer } from "mobx-react";
import recipeStore from "../stores/recipeStore";
import { Row, Stack } from "react-bootstrap";
import Card from './RecipeCard';

function RecipeList() {

if (recipeStore.loading) return <h1>Loading</h1>;

const recipeList = recipeStore.recipes.map((recipe) => <Card key={recipe._id} recipe={recipe} />);
console.log("🚀 ~ file: RecipeList.js ~ line 13 ~ RecipeList ~ recipeList", recipeList)
console.log("🚀 ~ file: RecipeList.js ~ line 14 ~ RecipeList ~ recipeStore.recipes", recipeStore.recipes)

  return (
    <div>
      <h1 className="title">Recipes</h1>
      <Stack direction="horizontal" gap={3}>
      </Stack>
      <Row>{recipeList}</Row>
    </div>
  );
}

export default observer(RecipeList);
