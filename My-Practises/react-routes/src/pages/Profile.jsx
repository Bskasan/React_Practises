import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>THIS IS THE PROFILE PAGE</h1>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Go back to about page
      </button>
    </div>
  );
};

export default Profile;
