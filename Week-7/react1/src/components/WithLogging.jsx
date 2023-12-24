import React, { Component } from "react";
import BookList from "./BookList";

// HOC
const WithLogging = (WrappedComponent) => {
  return class extends Component {
    render() {
      console.log("Rendering");
      return <WrappedComponent {...this.props} />;
    }
  };
};

const BookListWithLogging = WithLogging(BookList);
export default BookListWithLogging;
