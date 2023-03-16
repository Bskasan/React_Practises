import React from "react";
//! Better for Performance to add bootstrap components.
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Doctors = ({ doctors }) => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row className="justify-content-center">
        {doctors.map((dr) => (
          <Col key={dr.id} xs={6} sm={4} md={3}>
            <img src={dr.img} alt={dr.name} className="img-thumbnail doctor-img" />
            <h4>{dr.name}</h4>
            <h5>{dr.dep}</h5>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Doctors;
