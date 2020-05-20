/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { REMOVE_BOOK } from '../actions/index';

const removeBook = (book, state) => {
  state.dispatch(REMOVE_BOOK(book));
};
const BooksList = ({ store }) => {
  const books = Object.values(store).filter(el => el.id >= 0);
  return (
    <div>
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {books.map(book => <Book key={Math.random() * 1000} handleDelete={() => removeBook(book, store)} book={book} />)}
      </table>
    </div>
  );
};

BooksList.propTypes = {
  store: PropTypes.array.isRequired,
};

export default BooksList;
