import "./App.css";
import React, { Component } from "react";

import NewTask from "./components/NewTask";
import List from "./components/List";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };
  }

  handleAdd = task => {
    this.setState({ list: [...this.state.list, task] });
  };

  render() {
    return (
      <div className="App">
        <h1>My to-do lsit</h1>
        <NewTask add={this.handleAdd} />
        <List task={this.state.list} />
      </div>
    );
  }
}
