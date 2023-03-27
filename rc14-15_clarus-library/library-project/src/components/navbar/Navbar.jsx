import React, { useState } from "react";
import { menuIcon } from "../../helper/iconData";
import { Logo, MenuLink, Nav, Menu, HamburgerIcon } from "./Navbar.style";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">Bekir's Library</Logo>
      <HamburgerIcon onClick={() => setShowMenu(!showMenu)}>
        {menuIcon}
      </HamburgerIcon>
      {/* Gonderdigimiz props u burada karsilamayi unutmayalim. */}
      <Menu showMenu={showMenu}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/register">Register</MenuLink>
        <MenuLink to="/login">Login</MenuLink>
        <MenuLink to="/login">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
