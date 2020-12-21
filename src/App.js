import "./App.css";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import Dashboard from "./components/Dashboard/Dashboard";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      flightCodes: [],
      squadronData: [ { } ]
    };
  }

  async componentDidMount() {
    const response = await fetch("https://us-central1-cc-dashboard-afb15.cloudfunctions.net/getFlightCodes");
    const newFlightCodes = await response.json();
    this.setState({ flightCodes: newFlightCodes });
    
    let outputData = [];
    await this.flightCodes.forEach(async flightCode => {
      const flightDataResponse = await fetch(`https://us-central1-cc-dashboard-afb15.cloudfunctions.net/getAirmen/${flightCode}`);
      const flightData = await flightDataResponse.json();
      outputData.push(flightData);
    });

    this.setState({squadronData: outputData});
  }

  handleLogin = (event) => {
    this.setState({ isLoggedIn: true });
  };
  handleLogout = (event) => {
    this.setState({ isLoggedIn: false })
  }

  render() {
    const loginOrDashboard = this.state.isLoggedIn ? (
      <Dashboard logoutButtonClick={this.handleLogout} flightCodes={this.state.flightCodes}/>
    ) : (
      <LoginScreen loginButtonClick={this.handleLogin} />
    );
    return <div className="App">{loginOrDashboard}</div>;
  }
}

export default App;
