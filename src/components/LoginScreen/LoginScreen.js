import React from "react";

const LoginScreen = ({ loginButtonClick }) => {
  return (
    <div>
      <h1 className="header-text">Commander's Dashboard</h1>
      <button
        onClick={(event) => loginButtonClick(event)}
        className="login-button"
      >
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
