import "./App.css";
import Todo from "./components/Todo";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      list: []
    };
  }

  handleInput(value) {
    this.setState({ userInput: value });
  }

  handleClick = () => {
    this.setState({
      list: [...this.state.list, this.state.userInput],
      userInput: ""
    });
  };

  render() {
    let list = this.state.list.map((e, i) => {
      return <Todo key={i} task={e} />;
    });
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input
          value={this.state.userInput}
          placeholder="Enter new task"
          onChange={e => {
            this.handleInput(e.target.value);
          }}
        />
        <button onClick={this.handleClick}>Add</button>
        <br />
        {list}
      </div>
    );
  }
}
