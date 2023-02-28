import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    alert(`
    username: ${username}
    email: ${email}
    password: ${password}
    `);

    //* Debug on Console
    console.log(`
    username: ${username}
    email: ${email}
    password: ${password}
    `);

    setEmail("");
    setUsername("");
    setPassword("");
  }

  return (
    <div>
      <h2 className="display-6 text-danger">FORMS</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username : <span>{username}</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={handleUsername}
            value={username || " "}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email : <span>{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button type="submit" className="btn btn-danger p-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
