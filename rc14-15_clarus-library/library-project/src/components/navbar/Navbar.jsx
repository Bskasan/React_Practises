import React from "react";
import { Logo, Nav } from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/" >Bekir's Library</Logo>
    </Nav>
  );
};

export default Navbar;
