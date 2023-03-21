import React from "react";
import Button from "./styled/Button";
import Nav from "./styled/Nav";

const Header = () => {
  return (
    <div>
      <Nav>
        <div>
          <img src="./images/logo.png" width={"300px"} alt="logo" />
        </div>

        <div>
          <Button color="#AF3A53"> Apply Courses</Button>
          <Button bg="#AF3A53"> Talk to Advisor</Button>
        </div>
      </Nav>

      
    </div>
  );
};

export default Header;
