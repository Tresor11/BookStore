import React from 'react';

const CategoryFilter = ({onChange}) => {
    const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return(
      <div>
        <select onChange={()=> onChange}>
            {categories.map(el => <option key={Math.random() * 100} value={el}>{el}</option>)}
        </select>
      </div>
    )
}

export default CategoryFilter;