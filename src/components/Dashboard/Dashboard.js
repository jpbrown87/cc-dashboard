import React from "react";
import { Card } from 'react-bootstrap'
import CategoryCard from './Category-Card/CategoryCard'


const Dashboard = ({logoutButtonClick, flightCodes}) => {
  // const [myString, setMyString] = React.useState("");
  
  console.log(flightCodes);
  return (
    <div>
      <h1>DASHBOARD</h1>
      <div className="cards">
        <CategoryCard category="Fitness" flightcodes={flightCodes}/>
        <CategoryCard category="ADLS" flightcodes={flightCodes}/>
        <CategoryCard category="Evaluation" flightcodes={flightCodes}/>
        <CategoryCard category="Medical" flightcodes={flightCodes}/>
      </div>

      <button onClick={(event) => logoutButtonClick(event)} className="logout-button">Logout</button>
    </div>
  );
};

export default Dashboard;
