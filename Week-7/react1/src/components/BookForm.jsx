import React, { useState } from "react";

const BookForm = ({ filteredBooks, addBook }) => {
  const [bookFormState, setBookFormState] = useState({
    title: "",
    author: "",
    year: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setBookFormState({ ...bookFormState, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addBook(bookFormState);
  }

  const { title, author, year } = bookFormState;

  return (
    <div className="flex flex-col gap-4">
      <header>
        <h1 className="font-bold text-2xl">Books Form</h1>
      </header>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div id="title-section" className="flex gap-4">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            className="border-2 border-black"
            onChange={handleInputChange}
          />
        </div>
        <div id="author-section" className="flex gap-4">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            value={author}
            className="border-2 border-black"
            onChange={handleInputChange}
          />
        </div>
        <div id="year-section" className="flex gap-4">
          <label htmlFor="year">Year</label>
          <input
            type="text"
            name="year"
            id="year"
            value={year}
            className="border-2 border-black"
            onChange={handleInputChange}
          />
        </div>
        <button
          className="border-2 border-black p-1 rounded w-fit"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;
