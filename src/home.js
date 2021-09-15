import React, { Component } from "react";
import { Search, BookCard } from "./components";

export default class Home extends Component {
  state = { value: "" };

  handleChanges = (event) => {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
  };
 

  render() {
    return (
      <div>
        <Search handleChanges = {this.handleChanges}value={this.state.value} />
        <BookCard value={this.state.value}/>
      </div>
    );
  }
}
