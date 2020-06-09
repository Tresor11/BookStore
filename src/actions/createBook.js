import {
  CREATE_BOOK,
} from './index';

function createBook(data) {
  return dispatch => {
    fetch('https://cors-anywhere.herokuapp.com/https://books-api-t.herokuapp.com/books',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(CREATE_BOOK(res));
      })
      .catch(error => error);
  };
}


export default createBook;
