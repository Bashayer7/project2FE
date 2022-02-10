import { Button, InputGroup, FormControl, Modal, Form } from "react-bootstrap";
import React, {useState } from "react";
import { observer } from 'mobx-react'
import recipeStore from "../stores/recipeStore";
import Select from "react-select";
import categoryStore from "../stores/categoryStore";
import ingredientStore from "../stores/ingredientStore";


function RecipeModal() {

  const [recipe, setRecipe] = useState(
     {
      name: "",
      description:"",
      image: "",
      categories: [],
      ingredients: [],
    }
  );

  const [show, setShow] = useState(false);
  
  const [ categoriesSelection, setCategoriesSelection]= useState({
    selection: null,
  });
  const [ ingredientsSelection, setIngredientsSelection]= useState({
    selection: null,
  });

  const categoriesSelect = categoryStore.categories.map((category, index) => {
    return { value: category._id, label: category.name }

  });
 
  const ingredientSelect = ingredientStore.ingredients.map((ingredient, index) => {
    return { value: ingredient._id, label: ingredient.name }

  });

const handleClose = () => setShow(false);

const handleShow = () => setShow(true);

const handleChange = (event) =>
  setRecipe({ ...recipe, [event.target.name]: event.target.value });

const handleImage = (event) => 
  setRecipe({...recipe, [event.target.name]: event.target.files[0]});

const catHandleChange = (selected) => {
  setCategoriesSelection({selection: selected})
};

const ingHandleChange = (selected) => {
  setIngredientsSelection({selection: selected})
};
    
const handleSubmit = (event) => {
  event.preventDefault();
  let catArray = [];
  let ingArray = [];
  if(categoriesSelection.selection){
    catArray = categoriesSelection.selection.map((element) => element.value)
  };
  if(ingredientsSelection.selection){
    ingArray = ingredientsSelection.selection.map((element) => element.value)
  };
  const newRecipe = {
  ...recipe,
  categories: catArray,
  ingredients: ingArray,
  };
  recipeStore.createRecipe(newRecipe);
  handleClose();
  };

  return (
    <> 
      <Button variant="outline-dark" onClick={handleShow}>
       New Recipe
      </Button>
      <Modal  show={show} onHide={handleClose}>
      <Modal.Body>
          <Form onSubmit={handleSubmit}>
              <InputGroup className="mb-3">
              <InputGroup.Text>Name</InputGroup.Text>
              <FormControl
                placeholder="Your recipe name"
                name="name"
                value={recipe.name}
                type="text"
                onChange={handleChange}
              />
              <InputGroup.Text>Description</InputGroup.Text>
              <FormControl
                placeholder="Your recipe Description"
                name="description"
                value={recipe.description}
                type="text"
                onChange={handleChange}
              />
              </InputGroup>

              <InputGroup className="mb-3">
              <InputGroup.Text>Image</InputGroup.Text>
              <FormControl
                name="image"
                type="text"
                onChange={handleChange}
                placeholder="Image"
              />
              </InputGroup>
              
              <InputGroup className="mb-5">
              <InputGroup.Text>Categories</InputGroup.Text>
              <Select isMulti options={categoriesSelect} onChange={catHandleChange} value={categoriesSelect.selection}/>
              </InputGroup>

              <InputGroup className="mb-3">
              <InputGroup.Text>Ingredients</InputGroup.Text>
              <Select isMulti options={ingredientSelect} onChange={ingHandleChange} value={ingredientSelect.selection}/>
              </InputGroup>

            <Button variant="outline-dark" type="submit">
            Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default observer(RecipeModal);