import styled from "styled-components";

const HeaderText = styled.h1`
  /* ... */
  color: ${({ color }) => color || "black"};
  background-color: ${({ bgColor }) => bgColor || "black"};
  font-size: 2rem;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export default HeaderText;
