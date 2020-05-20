/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { CREATE_BOOK } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      id: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(el) {
    const newSate = el.target.value;
    const prevState = this.state;
    this.setState({ ...prevState, [el.target.name]: newSate });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.store.dispatch(CREATE_BOOK(this.state));
    this.setState({ title: '', category: '' });
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <div>
        <form>
          <input type="text" placeholder="Book title" name="title" value={this.state.title} onChange={this.handleChange} />
          <select name="category" value={this.state.category} onChange={this.handleChange}>
            {categories.map(el => <option key={Math.random() * 100} value={el}>{el}</option>)}
          </select>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  store: PropTypes.object.isRequired,
};

export default BooksForm;
