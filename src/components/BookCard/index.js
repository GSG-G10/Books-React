import React, { Component } from "react";
import BookCard from "./BookCard";
import fetchbook from "../../api/fetchbook";
import "./style.css";


export default class BookCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  componentDidMount() {
    fetchbook((data)=>{
       this.setState({books: data});
    })
  }
  render() {
    const {books} = this.state;
    return (
      <div className="books-wrapper">
        
           {
             books?
             books.map((book)=><BookCard key={book.rank} details={book}/>)
             :
             <h1>Loading ... </h1>
           }        
      </div>
    );
  }
}
