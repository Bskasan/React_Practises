import { Container, Row, Col } from "react-bootstrap";
import { data } from "../helpers/data";

const CardContainer = () => {
  return (
    <Container className="card-container rounded-4 my-4 p-3"> 
      {data.map((player) => {
        <p>{player.name}</p>
      })}
    </Container>
  );
};

export default CardContainer;
