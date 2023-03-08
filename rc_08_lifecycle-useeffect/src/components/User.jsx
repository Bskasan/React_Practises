import React from "react";
import { useState, useEffect } from "react";

const User = () => {
  //let user = "Sample";

  const [user, setUser] = useState("");

  const getUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(user);

  return (
    <div>
      {/* <h1>{user.name.first}</h1> */}
      <img src="" alt="" />
      <h4>email</h4>
      <h5>phone</h5>
      <p>dateOfBirth</p>

      <button onClick={getUser} className="btn btn-warning">
        Get User
      </button>
    </div>
  );
};

export default User;
