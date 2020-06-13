import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Link to="/post">
            <Button variant="outline-secondary">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PostCard;
