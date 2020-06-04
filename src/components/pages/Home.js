import React from "react";
import { Row } from "react-bootstrap";
import PostCard from "../common/PostCard";

function Home() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Home</h1>
      <Row xs="1" md="2" lg="3">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Row>
    </>
  );
}

export default Home;
