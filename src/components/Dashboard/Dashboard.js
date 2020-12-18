import React from "react";

const Dashboard = ({logoutButtonClick}) => {
  return (
    <div>
      <h1>DASHBOARD</h1>
      <button
        onClick={(event) => logoutButtonClick(event)}
        className="logout-button"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
