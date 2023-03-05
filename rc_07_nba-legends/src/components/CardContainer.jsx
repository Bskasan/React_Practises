import { Container, Row, Col } from "react-bootstrap";
import { data } from "../helpers/data";

const CardContainer = () => {
  return (
    <Container>
      {data.map((player) => {
        console.log(player);
      })}
    </Container>
  );
};

export default CardContainer;
