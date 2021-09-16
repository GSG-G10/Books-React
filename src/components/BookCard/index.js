import React, { Component } from "react";
import BookCard from "./BookCard";
import fetchbook from "../../api/fetchbook";
import "./style.css";

export default class BookCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    fetchbook((data) => {
      this.setState({ books: data });
    });
  }

  render() {
    const { value } = this.props;
    console.log(value);
    const { books } = this.state;
    const filterBooks = books.filter((book) => {
      return (
        book.title.toLowerCase().includes(value.toLowerCase()) ||
        book.author.toLowerCase().includes(value.toLowerCase())
      );
    });
    console.log(books[0]);
    return (
      <div className="books-wrapper">
        {books.length ? (
          value === "" ? (
            books.map((book) => <BookCard id={book.rank} details={book} />)
          ) : filterBooks.length ? (
            filterBooks.map((book) => (
              <BookCard id={book.rank} details={book} />
            ))
          ) : (
            <h1>Please Try Again ... </h1>
          )
        ) : (
          <h1>Loading ... </h1>
        )}
      </div>
    );
  }
}
