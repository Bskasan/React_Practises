import { Container, Col, Row } from "react-bootstrap";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  return (
    <Container className="card-container rounded-4 my-4 p-3">
      <Row>
        {data.map((player, i) => (
          <Col key={i}>
            <PlayerCard {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardContainer;
