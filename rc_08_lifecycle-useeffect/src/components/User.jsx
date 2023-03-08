import React from "react";
import { useState, useEffect } from "react";

const User = () => {
  //let user = "Sample";

  const [user, setUser] = useState();

  const getUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log("MOUNTING");
    getUser();
  }, []);

  console.log("RENDER");
  console.log(user);

  return (
    <div>
      <h1>
        {/*! Optional Chaining */}
        {user?.name?.first} {user?.name?.last}
      </h1>
      <img
        className="rounded-circle"
        src={user?.picture?.large}
        alt="profile-picture"
      />
      <h4>{user?.email}</h4>
      <h5>{user?.phone}</h5>
      <p>{new Date(user?.dob?.date).toLocaleDateString("en-US")}</p>

      <button onClick={getUser} className="btn btn-warning">
        Get User
      </button>
    </div>
  );
};

export default User;
