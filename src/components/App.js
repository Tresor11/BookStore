/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App({ store }) {
  return (
    <div className="container">
      <BooksList store={store} />
      <BooksForm store={store} />
    </div>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
