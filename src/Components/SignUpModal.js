import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import React, { useState } from "react";
import authStore from "../stores/authStore";

function SignUpModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signUp(user);
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="outline-secondary"
        className="delete"
        onClick={() => setIsOpen(true)}
      >
        Sign Up
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <InputGroup.Text>UserName</InputGroup.Text>
              <Form.Control
                name="username"
                value={user.username}
                type="text"
                placeholder="username here"
                onChange={handChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Password</InputGroup.Text>
              <Form.Control
                name="password"
                value={user.password}
                type="password"
                placeholder="password here"
                onChange={handChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Email</InputGroup.Text>
              <Form.Control
                name="email"
                value={user.email}
                type="text"
                placeholder="email here"
                onChange={handChange}
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleSubmit}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SignUpModal;
