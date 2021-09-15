import React, { Component } from "react";
import { Headers, BookCard } from "./components";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Headers />
        <BookCard />
      </div>
    );
  }
}
