import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import CategoryCard from "./Category-Card/CategoryCard";

const Dashboard = ({
  logoutButtonClick,
  flightCodes,
  squadronDataOrWhateverName,
}) => {
  // const [myString, setMyString] = React.useState("");
  const match = useRouteMatch();
  // console.log(flightCodes);
  return (
    <div>
      <h1>DASHBOARD</h1>
      <div className="cards">
        <Container>
          <Router>
            {/* <Switch> */}
              <Row>
                <Col>
                  {/* <Route path={`${match.url}/:Fitness`}> */}
                    <CategoryCard category="Fitness" flights={flightCodes} squadronDataOrAnotherName={squadronDataOrWhateverName}/>
                  {/* </Route> */}
                </Col>

                <Col>
                  {/* <Route path={`${match.url}/:ADLS`}> */}
                    <CategoryCard category="ADLS" flights={flightCodes} squadronDataOrAnotherName={squadronDataOrWhateverName}/>
                  {/* </Route> */}
                </Col>

                <Col>
                  {/* <Route path={`${match.url}/:Evaluation`}> */}
                    <CategoryCard category="Evaluation" flights={flightCodes} squadronDataOrAnotherName={squadronDataOrWhateverName}/>
                  {/* </Route> */}
                </Col>

                <Col>
                  {/* <Route path={`${match.url}/:Medical`}> */}
                    <CategoryCard category="Medical" flights={flightCodes} squadronDataOrAnotherName={squadronDataOrWhateverName}/>
                  {/* </Route> */}
                </Col>
              </Row>
            {/* </Switch> */}
              <Link to="/"><button onClick={(event) => logoutButtonClick(event)} className="logout-button">Logout</button></Link>
          </Router>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
