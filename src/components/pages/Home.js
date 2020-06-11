import React from "react";
import { Row } from "react-bootstrap";
import PostCard from "../common/PostCard";
import DropDown from "../common/DropDown";

function Home() {
  return (
    <>
      <hr />
      <DropDown />
      <hr />
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
