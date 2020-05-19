import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App({store}) {
  return (
    <div> 
      <BooksList books={store}/>
      <BooksForm />
    </div>
  )
}

export default App;