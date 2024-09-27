import { createContext, useState } from "react";
import Book from "./Book";
import BookForm from "./BookForm";
import BookDataLoader from "./BookDataLoader";
import useBookFilter from "../hooks/useBookFilter";
import ThemeSwitcher from "./ThemeSwitcher";

export const ThemeContext = createContext();
function BookList() {
  const [themeValue, setThemeValue] = useState("light");
  const [books, setBooks] = useState([
    { title: "Book 1", author: "Author 1", year: 2020 },
    { title: "Book 2", author: "Author 2", year: 2018 },
    { title: "Book 3", author: "Author 3", year: 2022 },
  ]);

  useBookFilter(books);

  function addBook(newBook) {
    setBooks([...books, newBook]);
  }

  function deleteBook(toDeleteBook) {
    const remainingBooks = books.filter((book) => book !== toDeleteBook);
    setBooks([...books, remainingBooks]);
  }

  return (
    <ThemeContext.Provider value={themeValue}>
      <div className="flex gap-12">
        <ThemeSwitcher />
        <button
          onClick={() =>
            setThemeValue(themeValue === "light" ? "dark" : "light")
          }
        >
          Switch theme
        </button>
        <BookForm books={books} addBook={addBook} />
        <div className="w-full flex flex-wrap gap-12">
          {books.length > 0 ? (
            books.map((book, index) => (
              <div key={index} className="flex flex-col">
                <Book
                  title={book.title}
                  author={book.author}
                  year={book.year}
                />
                <button
                  className="border-2 border-black rounded p-1 w-fit"
                  onClick={() => deleteBook(book)}
                >
                  Delete book
                </button>
              </div>
            ))
          ) : (
            <BookDataLoader books={books} setBooks={setBooks} />
          )}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default BookList;
