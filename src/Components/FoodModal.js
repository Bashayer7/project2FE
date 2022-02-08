import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { useState } from "react";
import foodStore from "../stores/foodStore";

function FoodModal({ oldFood }) {
  const [show, setShow] = useState(false);
  const [food, setFood] = useState(
    oldFood ?? {
      name: "",
      image: "",
    }
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setFood({ ...food, [event.target.name]: event.target.value });

  const handleImage = (event) => 
    setFood({...food, [event.target.name]: event.target.files[0]});
    

  const handleSubmit = (event) => {
    event.preventDefault();
    if (oldFood) foodStore.updateFood(food, oldFood._id);
    else foodStore.createFood(food);
    handleClose();
  };


  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        {oldProduct ? "Edit" : "New"}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text>Name</InputGroup.Text>
              <FormControl
                placeholder="Your food name"
                name="name"
                value={food.name}
                type="text"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Image</InputGroup.Text>
              <FormControl
                name="image"
                type="file"
                onChange={handleImage}
                placeholder="Image"
              />
            </InputGroup>
            <Button variant="outline-dark" type="submit">
              {oldFood ? "Edit" : "Add"} Food
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FoodModal;