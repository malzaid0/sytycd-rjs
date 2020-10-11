import React, { useState } from "react";

// Components
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

// Route
import { useParams } from "react-router-dom";

const BookList = props => {
  const [filteredBooks, setFilteredBooks] = useState(props.books);

  const filterBooks = query => {
    query = query.toLowerCase();
    let filtered = props.books.filter(book =>
      book.title.toLowerCase().includes(query)
    );
    setFilteredBooks(filtered);
  };

  const filterBooksByColor = bookColor => {
    return filteredBooks.filter(book => book.color === bookColor);
  };

  const bookColor = useParams().bookColor;
  let books = filteredBooks;

  if (bookColor) {
    books = filterBooksByColor(bookColor);
  }

  return (
    <div>
      <h3>Books</h3>
      <SearchBar onChange={filterBooks} />
      <BookTable books={books} />
    </div>
  );
};

export default BookList;
