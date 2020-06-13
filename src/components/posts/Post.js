import React from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import { Form, Button } from "react-bootstrap";

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
  console.log("handleEditorChange", html, text);
}
const Post = () => {
  return (
    <>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Title:</Form.Label>
        <Form.Control type="text" placeholder="Tile" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Post descriptio:n</Form.Label>
        <Form.Control as="textarea" placeholder="Lorem ipsum dolor sit amet." />
      </Form.Group>

      <Form.Group>
        <i>markdown editor:</i>
        <MdEditor
          value=""
          style={{ height: "500px" }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Button variant="success" type="submit">
          publish
        </Button>
      </Form.Group>
    </>
  );
};

export default Post;
