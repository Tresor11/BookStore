import {
  REMOVE_BOOK,
} from './index';

function removeBook(id) {
  return dispatch => {
    dispatch(REMOVE_BOOK(id));
    fetch(`https://cors-anywhere.herokuapp.com/https://books-api-t.herokuapp.com/books/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
      })
      .catch(error => {
        // dispatch(fetchProductsError(error));
        return error;
      });
  };
}

export default removeBook;
