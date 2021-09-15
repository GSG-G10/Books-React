import React, { Component } from "react";
import "./style.css";
import logo from "../../img/booklogo.png";

export default class Search extends Component {
  render() {
    const { handleChanges, value } = this.props;
    return (
      <div className="header">
        <div className="logo-img">
          <img src={logo} alt="booklogo" className="logo" />
          <h2>BOOK STORE </h2>
        </div>
        <div className="search-container">
          <form
            
            className="form"
            
          >
            <input
              type="text"
              placeholder="Search by title or author .."
              className="search"
              value={value}
              onChange={handleChanges}
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
