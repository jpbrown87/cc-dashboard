import React from "react";
import { Modal, Button } from "react-bootstrap";

const CardModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="displayed-card">
          <h1></h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>any info can go here</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button block size='lg' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;