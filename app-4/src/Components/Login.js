import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: ""
    };
    this.handleButton = this.handleButton.bind(this);
  }

  handleUser(name) {
    this.setState({ userName: name });
  }
  handlePass(pass) {
    this.setState({ password: pass });
  }

  handleButton() {
    alert(`Username: ${this.state.userName} Password: ${this.state.password}`);
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={e => this.handleUser(e.target.value)} />
        <input type="text" onChange={e => this.handlePass(e.target.value)} />
        <button onClick={this.handleButton}>Login</button>
      </div>
    );
  }
}
