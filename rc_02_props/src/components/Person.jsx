import React from "react";
import Msg from "./Msg";

const Person = ({ name, tel, img }) => {
  //! Destructuring
  //const {name, tel, img} = props
  return (
    <div>
      {/* <h2>Hi, My name is {name}</h2> */}
      <Msg name={name}/>
      <img
        style={{ width: "400px", height: "400px" }}
        src={img}
        alt="img-profile"
      />
      <p>{tel}</p>
    </div>
  );
};

export default Person;
