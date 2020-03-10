import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      arr: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };
  }
  render() {
    let food = this.state.arr.map((el, i) => {
      return <h2 key={i}>{el}</h2>;
    });
    return (
      <div className="App">
        <input type="text" />
        <h2>{food}</h2>
      </div>
    );
  }
}
