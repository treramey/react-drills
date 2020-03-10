import "./App.css";
import Image from "./components/Image";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://http.cat/409"} />
      </div>
    );
  }
}
