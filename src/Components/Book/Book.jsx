import React from "react";
import "./Book.css";
import ReadBtn from "../ReadBtn/ReadBtn";

const Book = () => {
  return (
    <div className="book container-fuild">
      <div className="book-info container">
        <h2>AMAZING LONDON TOUR</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there
        </p>
        <div className="book-btn">
          <ReadBtn btntitle="book now" />
          <ReadBtn btntitle="get more" />
        </div>
      </div>
    </div>
  );
};

export default Book;
