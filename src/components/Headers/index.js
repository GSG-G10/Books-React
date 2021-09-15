import React, { Component } from "react";
import "./style.css";
import logo from "../../img/booklogo.png";

export default class Headers extends Component {
  render() {
    return (
        <div class="header">
          <div class="logo-img">
            <img src={logo} alt="booklogo" class="logo" />
            <h2>BOOK STORE </h2>
          </div>
          <div class="search-container">
            <form action="/action_page.php" class="form">
              <input
                type="text"
                placeholder="Search.."
                name="search"
                class="search"
              />
              <button type="submit">
                <i class="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>

    );
  }
}
