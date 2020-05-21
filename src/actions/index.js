/* eslint-disable no-plusplus */
// import React from 'react';
let id = 4;

const CREATE_BOOK = book => ({
  type: 'CREATE_BOOK',
  id: id++,
  title: book.title,
  category: book.category,
});

const REMOVE_BOOK = book => ({
  type: 'REMOVE_BOOK',
  id: book.id,
});

export { CREATE_BOOK, REMOVE_BOOK };
