import React, { useState } from 'react';
import { observer } from 'mobx-react';
import foodStore from '../stores/foodStore';
import { Modal, Button, Form } from "react-bootstrap";


export const CatForm = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [newCat, setNewCat] = useState({
        title: "",
        image: "",
    });

    const handleChange = (event) => {
        setNewCat({...newCat, [event.target.name]: event.target.value});
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        foodStore.createFood(newCat);
        setIsOpen(false);
    }

    return (
        <>
      <Button className="food" onClick={() => setIsOpen(true)}>
        Create Category
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={{handleSubmit}}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text" value={newCat.name} onChange={handleChange} name="name" placeholder='Choose a name' />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text" value={newCat.image} onChange={handleChange} name="image" placeholder='Choose an image' />
                </Form.Group>
            </Form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Create Category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}
export default observer(CatForm)