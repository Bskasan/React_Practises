import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("-------");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <h2 className="display-6 text-danger">FORMS</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username : <span>{username}</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={handleUsername}
            value={username}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>

        <button type="submit" className="btn btn-danger p-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
