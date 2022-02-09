import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import categoryStore from "../stores/catgStore";

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
  categoryStore.CreateCatgeory(category);
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
          <div className="hh">
            <h3>category</h3>
            <div className="catg">
              <form action="http://localhost:8000/api/category">
                <label for="catg">Choose a category : </label>
                <select name="catgo" id="category">
                  <option value="categoryId">BreakFast</option>
                  <option value="categoryId">Lunch</option>
                  <option value="categoryId">Dinner</option>
                  <option value="categoryId">Drinks</option>
                </select>
                <br></br>
                <div className="btn">
                  <button type="submit">Submit</button>
                  <button type="create">Create</button>
                </div>
              </form>
            </div>
          </div>

          <InputGroup>
            <InputGroup.Text>Name</InputGroup.Text>
            <Form.Control
              value={category.name}
              type="text"
              name="name"
              onChange={handleChange}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Image</InputGroup.Text>
            <Form.Control
              value={category.image}
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
