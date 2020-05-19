import React from 'react';
import Book from '../components/Book';

export default function BooksList({books}) {
    return (
      <div> 
        <table>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
         <Book book={books[0]}/>
        </table>
      </div>
    )

}