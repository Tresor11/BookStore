// import React from 'react';

const CREATE_BOOK = ({book}) => {
  return {
    type: 'CREATE_BOOK',
    id: book.id,
    title: book.title,
    category: book.category
  }
}

const REMOVE_BOOK = ({book}) => {
  return {
    type: 'REMOVE_BOOK',
    id: book.id
  }
}

export {CREATE_BOOK, REMOVE_BOOK};