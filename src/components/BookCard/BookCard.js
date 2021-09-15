import React, { Component } from "react";
import "./style.css";

export default class BookCard extends Component {
  render() {
    return (
      <div>
        hHello booooks!
        {/* for one book (title , price , name og book , outher ,img ) */}
        <div class="book-cell">
          <div class="book-img">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg"
              alt=""
              class="book-photo"
            />
          </div>
          <div class="book-content">
            <div class="book-title">BIG MAGIC</div>
            <div class="book-author">by Elizabeth Gilbert</div>
            <div class="rate">
              <fieldset class="rating">
                <input type="checkbox" id="star5" name="rating" value="5" />
                <label class="full" for="star5"></label>
                <input type="checkbox" id="star4" name="rating" value="4" />
                <label class="full" for="star4"></label>
                <input type="checkbox" id="star3" name="rating" value="3" />
                <label class="full" for="star3"></label>
                <input type="checkbox" id="star2" name="rating" value="2" />
                <label class="full" for="star2"></label>
                <input type="checkbox" id="star1" name="rating" value="1" />
                <label class="full" for="star1"></label>
                <span class="book-voters">1.987 voters</span>
              </fieldset>
            </div>
            <div class="book-sum">
              Readers of all ages and walks of life have drawn inspiration and
              empowerment from Elizabeth Gilbert’s books for years.{" "}
            </div>
            <button class="book-see">See The Book</button>
          </div>
        </div>
      </div>
    );
  }
}
