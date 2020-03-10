import React, { Component } from "react";

export default class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.url} alt="" />
        <div>Error 599</div>
      </div>
    );
  }
}
