import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flex from "../../styles/Flex";

export const Nav = styled(Flex)`
  background: ${({ theme }) => theme.colors.navbarBgColor};
  padding: 1rem 2rem;
`;

export const Logo = styled(NavLink)`
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.logoColor};
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
`;
