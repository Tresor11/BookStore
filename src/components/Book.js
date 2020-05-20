/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ book, handleDelete }) {
  return (
    <tr>
      <th>{book.id}</th>
      <th>{book.title}</th>
      <th>{book.category}</th>
      <th><button type="button" onClick={() => handleDelete(book)}>remove book</button></th>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
};
