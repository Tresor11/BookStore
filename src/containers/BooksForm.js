/* eslint-disable react/destructuring-assignment */
import React from 'react';
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
            <option value={categories[0]}>{categories[0]}</option>
            <option value={categories[1]}>{categories[1]}</option>
            <option value={categories[2]}>{categories[2]}</option>
            <option value={categories[3]}>{categories[3]}</option>
            <option value={categories[4]}>{categories[4]}</option>
            <option value={categories[5]}>{categories[5]}</option>
            <option value={categories[7]}>{categories[6]}</option>
          </select>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default BooksForm;
