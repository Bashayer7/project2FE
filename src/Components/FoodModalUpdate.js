import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import foodStore from "../stores/foodStore";

function FoodModalUpdate({ oldFood }) {
  const [show, setShow] = useState(false);
  const [food, setFood] = useState({
    name: oldFood.name,
    image: oldFood.image,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setFood({ ...food, [event.target.name]: event.target.value });

  const handleImage = (event) => 
    setFood({ ...food, [event.target.name]: event.target.files[0]});
     

  const handleSubmit = (event) => {
    event.preventDefault();
    foodStore.updateFood(food, oldFood._id);
    console.log(food);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Food
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              value={product.name}
              onChange={(e) => handleChange(e)}
              placeholder="Food Name"
            />
            <input
              name="image"
              onChange={handleImage}
              placeholder="Image"
            />
            <button type="submit">Edit</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FoodModalUpdate;