/* eslint-disable react/jsx-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';

export default function BooksList({ books }) {
  return (
    <div>
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {books.map(book => <Book book={book} />)}
      </table>
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
};
