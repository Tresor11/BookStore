/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App(props) {
  const store = props;
  return (
    <div className="container">
      <BooksList store={store} />
      <BooksForm store={store} />
    </div>
  );
}

App.propTypes = {
  props: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
