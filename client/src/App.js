import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor(props) {
      super(props);
      this.state = { apiResponse: ""};
    }

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }
  componentWillMount() {
      this.callAPI();
  }

  render(){
    return (
      <div className="BuildItApp">
        <header className="BuildItApp-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="BuildItApp-title">Welcome to Anthonys Application</h1>
        </header>
        <p className="BuildItApp-intro">{this.state.apiResponse}</p>
      </div>
    );  
  }    
}

export default App
