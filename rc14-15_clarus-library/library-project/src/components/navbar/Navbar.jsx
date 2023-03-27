import React, { useState } from "react";
import { menuIcon } from "../../helper/iconData";
import { Logo, MenuLink, Nav, Menu, HamburgerIcon } from "./Navbar.style";

const Navbar = ({ currentUser, setCurrentUser }) => {
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setCurrentUser(false);
    sessionStorage.clear();
  };

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
        {/* <MenuLink to="/register">Register</MenuLink>
        <MenuLink to="/login">Login</MenuLink>
        <MenuLink to="/login">Logout</MenuLink> */}
        {currentUser ? (
          <MenuLink to="/login" onClick={logout}>
            Logout
          </MenuLink>
        ) : (
          <>
            <MenuLink to="/register">Register</MenuLink>
            <MenuLink to="/login">Login</MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
