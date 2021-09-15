import React, { Component } from "react";
import "./style.css";


export default class BookCard extends Component {
  
  render() {
    const {details: {book_image,title,author,price,description,buy_links:[{url}]},id} = this.props;
    return (
      <div className="book-card" id={id}>
        <div className="book-cell">
          <div className="book-img">
            <img
              src={book_image}
              alt=""
              className="book-photo"
            />
          </div>
          <div className="book-content">
            <div className="book-title"> {title} </div>
            <div className="book-author">by {author}</div>
            <div className="book-sum">
             {description}
            </div>
            <div className="book-price">
              <span className="price-label">Price:</span>
              <span className="price-value">{price}</span>
            </div>
            <a className="book-see" href={url} target="blank">Buy The Book</a>
          </div>
        </div>
      </div>
    );
  }
}
