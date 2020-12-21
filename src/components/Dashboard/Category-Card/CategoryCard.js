import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import FlightList from './Flights/FlightList';

const CategoryCard = ({category, flightCodes}) => {

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <ListGroup>
            <FlightList flights={flightCodes}/>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
