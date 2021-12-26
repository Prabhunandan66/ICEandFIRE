import React, { useEffect, useState } from "react";
import "./Books.css";

//list is only 5 books written 1,2,3,5,8 from api
export default function Books() {
  const [books, updateBooks] = useState(null);
  useEffect(() => {
    fetch("https://www.anapioficeandfire.com/api/books?page=1&pageSize=12")
      .then((resp) => resp.json())
      .then((json) => {
        updateBooks(json);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="booksBox">
      <h2>📚 BOOKS</h2>
      <div className="books">
        {books &&
          books.map((book, index) => {
            const cleanedDate = new Date(book.released).toDateString();
            const authors = book.authors.join(", ");

            return (
              <div className="book" key={index}>
                <h3>Book {index + 1}</h3>
                <h2>{book.name}</h2>
                <p>🖊️ {authors}</p>
                <p>📄 {book.numberOfPages} pages</p>
                <p>📍 {book.country}</p>
                <p>📅 {cleanedDate}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
