import styled, { css } from "styled-components";

const Links = styled.a`
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  margin-top: 1rem;
  &:hover {
    font-weight: 700;
  }

  ${({ small }) =>
    small &&
    css`
      background-color: black;
      color: #61dbfb;
      padding: 1rem;
    `}
`;

export default Links;
