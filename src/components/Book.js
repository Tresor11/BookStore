import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ book, handleDelete }) {
  return (
    <div className="book-details">
      <div id="title-cat">
        <p className="category">
          {book.category}
        </p>
        <h3 className="book-title">{book.title}</h3>
        <p className="book-id">
          Book-ID :
          {book.id}
        </p>
      </div>
      <div id="btn-remove">
        <button className="w-100 h-30 blue" type="button" onClick={() => handleDelete(book)}>Remove</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
