import { createStore } from 'redux';
import bookReducer from './books';

const store = createStore(bookReducer);
// function log() {
//   console.log(store.getState());
// }

// store.subscribe(log);

export default store;
