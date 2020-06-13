import React from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import { Form, Button } from "react-bootstrap";

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
  console.log("handleEditorChange", html);
  // console.log(document.querySelector(".section sec-html").innerHTML);
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

export const Html = () => {
  return (
    <>
      <h1>kjfkjfsd</h1>

      <p>
        <s>sfsfsssssf</s>
      </p>
      <p>
        <code>sdfsdf</code>
      </p>
      <pre>
        <code>fsdfjh fsdj ksjdgfjhgsf</code>
        \shfdjgsfg ahjgasfd
      </pre>

      <blockquote>
        <p>asasfafasfasfasfasfasfaa</p>
      </blockquote>

      <table>
        <thead>
          <tr>
            <th>Head</th>
            <th>Head</th>
            <th>Head</th>
            <th>Head</th>
            <th>Head</th>
            <th>Head</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
          </tr>
          <tr>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
          </tr>
          <tr>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
          </tr>
          <tr>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Post;
