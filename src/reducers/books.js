// import { createStore } from 'redux';
const initialBooks = [
  { id: 1, title: 'Rich Dad, Poor Dad', category: 'Learning' },
  { id: 2, title: 'Things Fall Apart', category: 'Horror' },
  { id: 3, title: 'Cinderilla and the seven Dwarfs', category: 'Kids' },
];

const bookReducer = (state = initialBooks, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, { id: action.id, title: action.title, category: action.category }];

    case 'REMOVE_BOOK':
      return (state.filter(book => book.id !== action.id));

    default:
      return state;
  }
};

export default bookReducer;
