import React, { Component } from "react";
import "./index.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: ""
    };
  }

  handleChange(value) {
    this.setState({ userInput: value });
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={e => this.handleChange(e.target.value)} />
        <h3>{this.state.userInput}</h3>
      </div>
    );
  }
}
