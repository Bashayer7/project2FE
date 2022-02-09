import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import IngredientStore from "../stores/ingredientStore";

export default function CreateNewIng(props) {
  const [ingerdient, setIngredient] = useState({
    name: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setIngredient({ ...ingredient, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  ingredientStore.createIngredient(ingredient);
  setIngredient({
    name: "",
    quantity: "",
  });
  props.closeModal(); // this is to close the modal that is shown

  return (
    <Modal centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text>Name</InputGroup.Text>
            <Form.Control
              value={ingerdient.name}
              type="text"
              name="name"
              onChange={handleChange}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>quantity</InputGroup.Text>
            <Form.Control
              value={ingerdient.quantity}
              type="text"
              name="quantity"
              onChange={handleChange}
            />
          </InputGroup>
          <br />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleSubmit}>
          Create ingredient
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
