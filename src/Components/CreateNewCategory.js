import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import categoryStore from "../stores/categoryaStore";

export default function CreateNewCategory(props) {
  const [category, setCatogery] = useState({
    name: "",
    image: "",
    desciption: "",
  });

  const handleChange = (e) => {
    setCatogery({ ...category, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  categoryStore.createCategory(category);
  setCatogery({
    name: "",
    image: "",
    desciption: "",
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
              value={category.title}
              type="text"
              name="title"
              onChange={handleChange}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Image</InputGroup.Text>
            <Form.Control
              value={jam3ya.image}
              type="text"
              name="image"
              onChange={handleChange}
            />
          </InputGroup>
          <br />
          <br />
          <InputGroup>
            <InputGroup.Text>desciption</InputGroup.Text>
            <Form.Control
              value={category.desciption}
              type="text"
              name="desciption"
              onChange={handleChange}
            />
          </InputGroup>
          <br />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleSubmit}>
          Create category
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
