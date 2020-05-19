// import { createStore } from 'redux';
import {CREATE_BOOK, REMOVE_BOOK} from '../actions/index';

const initialBooks = [
  {id: Math.floor(Math.random() * 100),  title: "Rich Dad, Poor Dad", category: "Learning"},
  {id: Math.floor(Math.random() * 100), title: "Things Fall Apart", category: "Horror"},
  {id: Math.floor(Math.random() * 100), title: "Cinderilla and the seven Dwarfs", category: "Kids"}
]

const bookReducer = (state = initialBooks, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, {id: action.id, title: action.title, category: action.category}];
    
    case REMOVE_BOOK:
      return (state.filter(book => book.id !== action.id))

    default:
      return state;
  }
}

export default bookReducer;