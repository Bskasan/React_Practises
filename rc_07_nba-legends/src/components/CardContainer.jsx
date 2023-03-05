import { Container, Col, Row, Form } from "react-bootstrap";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  return (
    <>
      <Form.Control placeholder="Search Player..." className="w-50 m-auto"/>
      <Container className="card-container rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {data.map((player, i) => (
            <Col md={6} lg={4} xl={3} key={i}>
              <PlayerCard {...player} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
