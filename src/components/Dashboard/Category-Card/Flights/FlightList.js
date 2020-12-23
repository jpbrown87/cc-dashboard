import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CardModal from "../CardModal";

const FlightList = ({ flightCodes, airmen }) => {
  const [bShowModal, setModalShow] = useState(false);
  const [activeFlight, setActiveFlight] = useState("");
  return (
    <>
      {" "}
      {flightCodes.flights.map((flightName, idx) => {
        return (
          <Button key={idx} block size="lg" onClick={() => { 
            setActiveFlight(flightName);
            setModalShow(true);
            }}>
            {flightName}
          </Button>
        );
      })}
      <CardModal
        show={bShowModal}
        onHide={() => setModalShow(false)}
        content={airmen}
        flightname={activeFlight}
      />
    </>
  );
};

export default FlightList;