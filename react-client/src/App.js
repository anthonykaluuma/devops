import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
      allname:[]
    };
  }

// Execute the calls when componnent mounts
  componentDidMount(){
    this.getIndex();
  }

async getIndex() {
    fetch("http://localhost:3001/index")
        .then(res => res.text())
        .then(res => this.setState({ getIndex: res }))
        .catch(err => err);
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, Again!!!!</h1>
        </header>
        <p className="App-intro">{this.state.getIndex}</p>        
      </div>
    );
  }
}

export default App;