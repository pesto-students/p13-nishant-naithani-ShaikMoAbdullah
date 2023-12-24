import React from "react";

const BookDetail = (props) => {
  const { title, author, year } = props;
  return (
    <div className="book">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Year: {year}</p>
    </div>
  );
};

export default BookDetail;
