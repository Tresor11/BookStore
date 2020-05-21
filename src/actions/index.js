/* eslint-disable no-plusplus */
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

const CHANGE_FILTER = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});

export { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER };
