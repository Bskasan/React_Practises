import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export default Flex;
