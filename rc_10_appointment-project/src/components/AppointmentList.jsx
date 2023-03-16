import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FaTimesCircle} from "react"

//? const dizi = []  -> true
//? dizi ? x : y   ->  x

const AppointmentList = ({ appointments, setAppointments }) => {
  return (
    <Container>
      <h3 className="display-6 mb-2">Appointment List</h3>
      {!appointments.length && (
        <img src="./img/appointment.jpg" width="50%" alt="" />
      )}

      {appointments.map((item) => {
        const { id, patient, consulted, doctor, day } = item;
        return (
          <div>
            <Row>
              <Col className="appointments">
                <h4>{patient}</h4>
                <h5>{doctor}</h5>
              </Col>
              <Col>
                <h6>{new Date(day).toLocaleDateString()}</h6>
                <h6>{new Date(day).toLocaleTimeString()}</h6>
              </Col>
              <Col>

              </Col>
            </Row>
          </div>
        );
      })}
    </Container>
  );
};

export default AppointmentList;
