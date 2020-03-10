import React, { Component } from "react";
import Todo from "./Todo";

export default class List extends Component {
  render() {
    let list = this.props.task.map((el, i) => {
      return <Todo key={i} task={el} />;
    });
    return <div>{list}</div>;
  }
}
