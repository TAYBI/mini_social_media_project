import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../../../store/actions/projectActions";

function CreateProject(props) {
  const initState = {
    title: "",
    content: ""
  };

  const [post, setPost] = useState(initState);

  const handleChange = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.createProject(post);
  };

  return (
    <div className="container white-text">
      <form onSubmit={handleSubmit}>
        <h4>New post</h4>
        <div className="input-feild">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={handleChange} />
        </div>
        <div className="input-feild">
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            className="materialize-textarea"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="input-feild">
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="btn  blue-grey"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(null, mapDispatchToProps)(CreateProject);
