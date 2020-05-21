import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { REMOVE_BOOK } from '../actions/index';

const BooksList = props => {
  const { remove, books } = props;
  const removeBook = book => {
    remove(book);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>

          {books.map(book => (
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
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
};

const mapDispatchToProps = {
  remove: REMOVE_BOOK,
};

const mapStateToProps = state => ({ books: state });

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
