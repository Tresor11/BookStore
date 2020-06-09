const CREATE_BOOK = book => ({
  type: 'CREATE_BOOK',
  // eslint-disable-next-line no-plusplus
  id: book.id,
  title: book.title,
  category: book.category,
});

const REMOVE_BOOK = id => ({
  type: 'REMOVE_BOOK',
  id,
});


const CHANGE_FILTER = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});

const GET_BOOKS = books => ({
  type: 'GET_BOOKS',
  books,
});


export {
  CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER, GET_BOOKS,
};
