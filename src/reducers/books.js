const initialBooks = [];

const bookReducer = (state = initialBooks, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, { id: action.id, title: action.title, category: action.category }];
    case 'GET_BOOKS':
      return [...state, ...action.books];
    case 'REMOVE_BOOK':
      return (state.filter(book => book.id !== action.id));
    default:
      return state;
  }
};

export default bookReducer;
