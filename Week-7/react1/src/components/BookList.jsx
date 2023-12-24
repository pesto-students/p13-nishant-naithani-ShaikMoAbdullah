import { Component } from "react";
import Book from "./Book";

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
  }

  render() {
    return this.state.books.map((book) => (
      <Book
        key={book.title}
        title={book.title}
        author={book.author}
        year={book.year}
      />
    ));
  }
}

export default BookList;
