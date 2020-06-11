import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import src from "../../imgs/avatar.png";

const About = () => {
  return (
    <>
      <Row xs="2">
        <Col xs="auto">
          <Image src={src} width="180" height="180" rounded />
        </Col>
        <Col xs="9" className="user_info">
          <h2>User name</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          voluptatibus soluta fugit rem tempora. Reiciendis minus necessitatibus
          tempore quo autem!
        </Col>
      </Row>
    </>
  );
};

export default About;
