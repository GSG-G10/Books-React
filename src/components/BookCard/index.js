import React, { Component } from "react";
import BookCard from "./BookCard";
import fetchbook from "../../api/fetchbook";
import "./style.css";


export default class BookCards extends Component {
  componentDidMount() {
    fetchbook((data)=>{
      console.log(data);
    })
  }
  render() {
    return (
      <div>

        <BookCard  />
        
      </div>
    );
  }
}
