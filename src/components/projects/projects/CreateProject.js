import React, { useState } from "react";

function CreateProject() {
  const initState = {
    title: "",
    const: ""
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
    console.log(e);
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

export default CreateProject;
