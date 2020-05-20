import React from 'react';

export default function BooksForm() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <form>
        <input type="text" value="Book Title" />
        <select>
          {categories.map(el => <option key={Math.random() * 100} value={el}>{el}</option>)}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
