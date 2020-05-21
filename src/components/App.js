import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="container">
      <header className='header'>
        <h1 className="title">BookStore CMS</h1>
        <h5>BOOKS</h5>
        <h5>CATEGORIES</h5>
      </header>
      
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
