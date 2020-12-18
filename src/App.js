import "./App.css";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import Dashboard from "./components/Dashboard/Dashboard";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = (event) => {
    this.setState({ isLoggedIn: true });
  };
  handleLogout = (event) => {
    this.setState({ isLoggedIn: false })
  }

  render() {
    const loginOrDashboard = this.state.isLoggedIn ? (
      <Dashboard logoutButtonClick={this.handleLogout}/>
    ) : (
      <LoginScreen loginButtonClick={this.handleLogin} />
    );

    return <div className="App">{loginOrDashboard}</div>;
  }
}

export default App;
