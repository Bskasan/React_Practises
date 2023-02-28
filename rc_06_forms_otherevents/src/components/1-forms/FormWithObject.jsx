import React, { useState } from "react";

const FormWithObject = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  const { username, email, password, address } = formData;

  const handleFormData = (e) => {
    //console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
       username:${username}
       email:${email}
       password:${password}
       address:${address}
    `);
    setFormData({ username: "", email: "", password: "", address: "" });
  };

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
            onChange={handleFormData}
            value={username}
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
            onChange={handleFormData}
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
            onChange={handleFormData}
            value={password}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            onChange={handleFormData}
            value={address}
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

export default FormWithObject;
