/* eslint-disable react/jsx-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

function BooksList(props) {
  const { state } = props;
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
          {state.map(book => <Book key={book.id} book={book} />)}
        </tbody>
      </table>
    </div>
  );
}

BooksList.propTypes = {
  state: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({ state });
export default connect(mapStateToProps)(BooksList);
