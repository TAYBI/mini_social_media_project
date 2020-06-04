import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const PostCard = () => {
  return (
    <Col>
      <Card style={{ margin: "0.5rem 0.5rem 0.5rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae, minima!
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PostCard;
