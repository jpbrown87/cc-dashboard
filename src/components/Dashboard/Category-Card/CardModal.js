import React from "react";
import { Modal, Button } from "react-bootstrap";
import './CardModal.css'

const CardModal = (props) => {
  const flightData = props.content.filter((element) => {
    return element.flightName === props.flightname;
  });

  const getValidFlightData = () =>
    flightData[0] == undefined ? { flightData: [] } : flightData[0];

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="displayed-card">
          <h1>{props.flightName}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table">
          <thread className="thread-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Evaluation</th>
              <th scope="col">ADLS</th>
              <th scope="col">PT</th>
              <th scope="col">Medical</th>
            </tr>
            <tbody>
            {flightData[0] !== undefined ? (
              flightData[0].flightData.result.map((element, idx) => {
                return (
                  <tr>
                    <th scope="row">{idx + 1}</th>
                    <td>{element.airmanData.firstName}</td>
                    <td>{element.airmanData.lastName}</td>
                    <td>{element.airmanData.evaluation}</td>
                    <td>{element.airmanData.adls}</td>
                    <td>{element.airmanData.pt}</td>
                    <td>{element.airmanData.medical}</td>
                  </tr>
                );
              })
            ) : (
              <h1>false</h1>
            )}
          </tbody>
          </thread>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button block size="lg" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;
