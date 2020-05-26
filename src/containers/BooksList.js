import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = props => {
  const {
    addFilter, remove, books, filter,
  } = props;
  const removeBook = book => {
    remove(book);
  };

  const handleFilterChange = evt => {
    addFilter(evt.target.value);
  };

  const filteredBooks = filter === 'ALL' ? books : books.filter(el => el.category === filter);
  return (
    <div>
      <CategoryFilter onChange={handleFilterChange} value={filter} />

      {filteredBooks.map(book => (
        <Book
          key={Math.random() * 1000}
          handleDelete={() => removeBook(book)}
          book={book}
        />
      ))}
    </div>
  );
};

BooksList.propTypes = {
  remove: PropTypes.func.isRequired,
  addFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
};

const mapDispatchToProps = {
  remove: REMOVE_BOOK,
  addFilter: CHANGE_FILTER,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
