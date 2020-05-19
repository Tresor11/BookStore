import React from 'react';

export default function BooksForm() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <form>
        <input type="text" value="Book Title" />
        <select>
          <option value={categories[0]}>{categories[0]}</option>
          <option value={categories[1]}>{categories[1]}</option>
          <option value={categories[2]}>{categories[2]}</option>
          <option value={categories[3]}>{categories[3]}</option>
          <option value={categories[4]}>{categories[4]}</option>
          <option value={categories[5]}>{categories[5]}</option>
          <option value={categories[7]}>{categories[6]}</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
