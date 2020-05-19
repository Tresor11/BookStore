import React from 'react';
import { createStore } from 'redux';

export default function BooksList({books}) {
    return (
      <div> 
        <table>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
          {
            books.map(book => {
            <tr>
              <th>{book.id}</th>
              <th>{book.title}</th>
              <th>{book.category}</th>
            </tr>
            })
          }

        </table>
      </div>
    )

}