/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ book, handleDelete }) {
  return (
    <div className="book-details">
      <div id="title-cat">
        <p>Category : {book.category}</p>
        <h3>{book.title}</h3>
        <p>Book-ID : {book.id}</p>
      </div>
      <div id="btn-remove">
        <button className="w-100 h-30 blue" type="button" onClick={() => handleDelete(book)}>Remove</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
