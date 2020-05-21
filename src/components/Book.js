/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ book, handleDelete }) {
  return (
    <ul>
      <li>{book.category}</li>
      <li>{book.title}</li>
      <li><button type="button" onClick={() => handleDelete(book)}>Remove</button></li>
    </ul>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
