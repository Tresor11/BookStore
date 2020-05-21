/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
 
  return (
    <div className="container">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
