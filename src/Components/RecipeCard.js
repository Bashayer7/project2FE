import React from "react";
import { Card, Col } from "react-bootstrap";
import RecipeModal from "./RecipeModal";
import {observer} from 'mobx-react'

function RecipeCard({ recipe }) {
console.log(recipe.ingredients.map(ingredient => ingredient));
  return (
    <Col className="col-lg-4 mx-auto">
      <Card>
        <Card.Img variant="top" src={recipe.image} alt={recipe.name} />
        <Card.Body>
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Text>{recipe.description}</Card.Text>
          <Card.Text>{recipe.ingredients.map(ingredient => ingredient.name)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default observer(RecipeCard);
