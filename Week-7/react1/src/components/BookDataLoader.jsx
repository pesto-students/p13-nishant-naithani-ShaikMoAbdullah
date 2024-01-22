import { useEffect } from "react";

const BookDataLoader = ({ books, setBooks }) => {
  useEffect(() => {
    const newBooks = [
      { title: "Book 1", author: "Author 1", year: 2020 },
      { title: "Book 2", author: "Author 2", year: 2018 },
      { title: "Book 3", author: "Author 3", year: 2022 },
    ];
    setBooks([...books, newBooks]);
  }, [books]);
  return;
};

export default BookDataLoader;
