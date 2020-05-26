import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="main">
      <div className="container">
        <header className="header">
          <h1 className="title">BookStore CMS</h1>
          <h4>BOOKS</h4>
          <h4>CATEGORIES</h4>
        </header>

        <BooksList />
        <BooksForm />
      </div>

    </div>
  );
}

export default App;
