/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = props => {
  const { addFilter, remove, state } = props;
  const removeBook = book => {
    remove(book);
  };

  const handleFilterChange = evt => {
    addFilter(evt.target.value);
  };

  const filteredBooks = state.filter === 'ALL' ? state.books : state.books.filter(el => el.category === state.filter);

  return (
    <div>
      <CategoryFilter onChange={handleFilterChange} value={state.filter} />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map(book => (
            <Book
              key={Math.random() * 1000}
              handleDelete={() => removeBook(book)}
              book={book}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  remove: PropTypes.func.isRequired,
  state: PropTypes.array.isRequired,
  addFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  remove: REMOVE_BOOK,
  addFilter: CHANGE_FILTER,
};

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
