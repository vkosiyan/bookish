import React from "react";

function BookInfo({ book }) {
  const ratingItems = book.results.map((item, i) => {
    return <li key={i}>{item.Source}</li>;
  });
  return (
    <div className="book-data">
      Book Component
      <h1>{book.Title}</h1>
      <span>Year: {book.Year}</span>
      <span>Genre: {book.Genre}</span>
      <ul>{ratingItems}</ul>
    </div>
  );
}

export default BookInfo;


