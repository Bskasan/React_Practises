import styled from "styled-components";

export const Button = styled.button`
  /*background-color: #ff69b49e;
  color: white;*/

  background-color: ${(props) => (props.primary ? "white" : "hotpink")};
    color: ${({ primary }) => (primary ? "hotpink" : "white")}
  width: 8rem;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 2px solid hotpink;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  &:hover {
    transform: scale(0.98);
    cursor: pointer;
    background-color: #ff69b4a5;
  }
`;
