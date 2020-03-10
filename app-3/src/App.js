import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      filterStr: "",
      arr: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };
  }

  handleChange(filter) {
    this.setState({ filterStr: filter });
  }

  render() {
    let food = this.state.arr
      .filter((el, i) => {
        return el.includes(this.state.filterStr);
      })
      .map((el, i) => {
        return <h2 key={i}>{el}</h2>;
      });

    return (
      <div className="App">
        <input type="text" onChange={e => this.handleChange(e.target.value)} />
        {food}
      </div>
    );
  }
}
