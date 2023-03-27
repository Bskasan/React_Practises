import React from "react";
import { Logo, MenuLink, Nav, Menu } from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">Bekir's Library</Logo>
      <Menu>
        <MenuLink to="/">Home</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
