import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaTimesCircle } from "react-icons/fa";

//? const dizi = []  -> true
//? dizi ? x : y   ->  x

const AppointmentList = ({ appointments, setAppointments }) => {
  const handleDelete = (id) => {
    setAppointments(appointments.filter((item) => item.id !== id));
  };

  const handleDoubleClick = (id) => {
    setAppointments(
      appointments.map((item) =>
        item.id === id ? { ...item, consulted: !item.consulted } : item
      )
    );
  };

  return (
    <Container>
      <h3 className="display-6 mb-2">Appointment List</h3>
      {!appointments.length && (
        <img src="./img/appointment.jpg" width="50%" alt="" />
      )}

      {appointments.map((item) => {
        const { id, patient, consulted, doctor, day } = item;
        return (
          //? Conditional Rendering
          <div
            key={id}
            className={consulted ? "appointments" : "appointments consulted"}
            onDoubleClick={() => handleDoubleClick(id)}
          >
            <Row>
              <Col xs={12} sm={12} md={6}>
                <h4>{patient}</h4>
                <h5>{doctor}</h5>
              </Col>
              <Col xs={10} sm={8} md={5}>
                <h6>{new Date(day).toLocaleDateString()}</h6>
                <h6>{new Date(day).toLocaleTimeString()}</h6>
              </Col>
              <Col xs={2} sm={4} md={1} className="text-end">
                <FaTimesCircle
                  className="text-danger fs-1"
                  type="button"
                  onClick={() => handleDelete(id)}
                />
              </Col>
            </Row>
          </div>
        );
      })}
    </Container>
  );
};

export default AppointmentList;
