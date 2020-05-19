import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App({store}) {
  return (
    <div className="container"> 
      <BooksList books={store.getState()}/>
      <BooksForm />
    </div>
  )
}

export default App;