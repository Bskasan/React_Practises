import React from "react";
import Button from "./styled/Button";
import Flex from "./styled/Flex";
import Nav from "./styled/Nav";
import Image from "./styled/Image";

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

      <Flex>
        <div>
          <h1>The IT Career of Your Dreams Starts Here!</h1>
          <p>
            Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.
          </p>
          <Button bg="#AF3A53">Start Your New Career</Button>
        </div>
        <Image src="./images/hero.jpg"></Image>
      </Flex>
    </div>
  );
};

export default Header;
