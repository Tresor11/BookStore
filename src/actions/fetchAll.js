import {
  GET_BOOKS,
} from './index';

function getBooks() {
  return dispatch => {
    fetch('https://cors-anywhere.herokuapp.com/https://books-api-t.herokuapp.com/books')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(GET_BOOKS(res));
      })
      .catch(error => {
      // dispatch(fetchProductsError(error));
        return false;
      });
  };
}

export default getBooks;
