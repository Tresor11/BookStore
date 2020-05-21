/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { REMOVE_BOOK } from '../actions/index';

const BooksList = props => {
  const { remove, state } = props;
  const books = Object.values(state).filter(el => el.id >= 0);
  const removeBook = book => {
    remove(book);
  };
  return (
    <div>
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {books.map(book => <Book key={Math.random() * 1000} handleDelete={() => removeBook(book)} book={book} />)}
      </table>
    </div>
  );
};

BooksList.propTypes = {
  remove: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  remove: REMOVE_BOOK,
};

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
