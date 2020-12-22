import React, { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import Airmen from "../Airmen/Airmen";
import CardModal from "../CardModal";

const FlightList = ({ flightCodes, airmen }) => {
  const [bShowModal, setModalShow] = useState(false);
  return (
    <>
      {" "}
      {flightCodes.flights.map((flightName) => {
        return (
          <Button block size="lg" onClick={() => setModalShow(true)}>
            {flightName}
          </Button>
        );
      })}
      <CardModal
        show={bShowModal}
        onHide={() => setModalShow(false)}
        content={airmen}
      />
    </>
  );
};

export default FlightList;

//const match = useRouteMatch();
//
//  const flights = flightCodes.flights.map((flight, idx) => {
//    return (
//      <Link key={idx * 2} to={`${match.url}/:${flight}`}>
//        <ListGroup.Item key={idx}>{flight}</ListGroup.Item>
//      </Link>
//    );
//  });
//
//  return (
//    <div>
//      <Router>
//        <div>{flights}</div>
//        <Switch>
//          <Route path={`${match.url}/flightId`}>
//            <Airmen squadronData={airmen}/>
//          </Route>
//        </Switch>
//      </Router>
//    </div>
//  );

/*
const Inbox = ({ emails }) => {
    const match = useRouteMatch();
    const emailList = emails.map((email) => {
        return <Link className='email-card' to={`${match.url}/${email.id}`}><Email email={email} /></Link>
    });




    return (
        <Router>
            <h1>Inbox</h1>
            <div className='email-container'>
                <div className='email-list'>
                    {
                        emails.length > 0 ?
                            emailList
                            :
                            <p>There are currently no emails to show.</p>
                    }
                </div>

                <Switch>
                    <Route path={`${match.url}/:emailId`}>
                        <MessageDetail details={emails} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
*/
