import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books';
import filterReducer from './filter';


const middlewares = [thunk];


const reducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
});
const store = createStore(reducer, applyMiddleware(...middlewares));
store.subscribe(() => console.log(store.getState()));

export default store;
