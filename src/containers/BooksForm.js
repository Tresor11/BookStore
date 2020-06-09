import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CREATE_BOOK } from '../actions/index';
import createBook from '../actions/createBook';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      author: 'tresor',
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
    this.props.createBook(this.state);
    this.setState({ title: '', category: '' });
  }

  render() {
    const { title, category } = this.state;
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <div>
        <h4 className="form-control new-book-text">ADD NEW BOOK</h4>
        <form className="form-control" onSubmit={this.handleSubmit}>
          <input type="text" className="w-50 h-40" placeholder="Book title" name="title" value={title} onChange={this.handleChange} />
          <select name="category" className="w-25 h-40" value={category} onChange={this.handleChange}>
            <option value="">Category</option>
            {categories.map(el => <option key={Math.random() * 100} value={el}>{el}</option>)}
          </select>
          <button type="submit" className="w-20 h-40 blue">Add Book</button>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  create: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  create: CREATE_BOOK,
  createBook,
};

export default connect(null, mapDispatchToProps)(BooksForm);
