import React, { Component } from "react";

export default class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  handleInput(value) {
    this.setState({ input: value });
  }

  handleAdd = () => {
    this.props.add(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          placeholder="Enter new task"
          onChange={e => this.handleInput(e.target.value)}
        />
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}
