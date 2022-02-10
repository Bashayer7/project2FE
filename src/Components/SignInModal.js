import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import authStore from "../stores/authStore";

function SignInModal() {
  const [isOpen, setIsOpen] = useState(false);

    const [user, setUser] = useState({
      username: "",
      password: "",
    });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signIn(user);
    setIsOpen(false);
  };

  return (
    <>
      <Button className="delete" onClick={() => setIsOpen(true)}>
        Sign In
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
              <Form.Control type="text" onChange={handleChange} value={user.username} name="username" placeholder="Enter Your Username" />
           </Form.Group>

          <Form.Group className="mb-3" >
           <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={handleChange} value={user.password} name="password" placeholder="Enter Your Password"  />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  }
export default SignInModal;
