import React from 'react';
import Book from '../components/Book';

export default function BooksList({books}) {
  console.log(books);
    return (
      <div> 
        <table>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
         {books.map(book=> < Book book={book} />)}
        </table>
      </div>
    )

}