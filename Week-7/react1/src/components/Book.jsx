import "../styles/book.css";
import { memo, useState } from "react";

function Book({ title, author, year }) {
  const [show, setShow] = useState(true);
  return (
    <div className="book">
      {show && (
        <>
          <h3>{title}</h3>
          <p>Author: {author}</p>
          <p>Year: {year}</p>
        </>
      )}
      <button
        className="border-2 border-black rounded p-1"
        onClick={() => setShow(!show)}
      >
        Toggle
      </button>
    </div>
  );
}

export default memo(Book);
