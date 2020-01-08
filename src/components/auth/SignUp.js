import React, { useState } from "react";

function SignUp() {
  const initState = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  const [info, setInfo] = useState(initState);

  const handleChange = e => {
    setInfo({
      ...info,
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
        <h4>Sign Up</h4>
        <div className="input-feild">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" onChange={handleChange} />
        </div>
        <div className="input-feild">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" onChange={handleChange} />
        </div>
        <div className="input-feild">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div className="input-feild">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <div className="input-feild">
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="btn  blue-grey"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
