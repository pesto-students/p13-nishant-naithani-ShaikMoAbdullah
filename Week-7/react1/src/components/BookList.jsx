import { Component } from "react";
import Book from "./Book";
import BookForm from "./BookForm";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { title: "Book 1", author: "Author 1", year: 2020 },
        { title: "Book 2", author: "Author 2", year: 2018 },
        { title: "Book 3", author: "Author 3", year: 2022 },
      ],
    };
    this.addBook = this.addBook.bind(this);
  }

  addBook(newBook) {
    this.setState((prevState) => ({
      books: [...prevState.books, newBook],
    }));
  }

  deleteBook(toDeleteBook) {
    const remainingBooks = this.state.books.filter(
      (book) => book !== toDeleteBook
    );
    this.setState(() => ({
      books: remainingBooks,
    }));
  }

  render() {
    return (
      <div className="flex gap-12">
        <BookForm books={this.state.books} addBook={this.addBook} />
        <div className="w-full flex flex-wrap gap-12">
          {this.state.books.length > 0
            ? this.state.books.map((book, index) => (
                <div key={book.index} className="flex flex-col">
                  <Book
                    title={book.title}
                    author={book.author}
                    year={book.year}
                  />
                  <button
                    className="border-2 border-black rounded p-1 w-fit"
                    onClick={() => this.deleteBook(book)}
                  >
                    Delete book
                  </button>
                </div>
              ))
            : "No data available"}
        </div>
      </div>
    );
  }
}

export default BookList;
