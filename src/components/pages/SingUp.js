import React from "react";
import { Form, Button } from "react-bootstrap";

const SingUp = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Sing Up</h1>
      <hr />

      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="confirm password" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="keep me logged in" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SingUp;
