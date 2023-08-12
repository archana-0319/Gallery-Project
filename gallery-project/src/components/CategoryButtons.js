import React from 'react';

function CategoryButtons({ onSelectCategory }) {
  const categories = ['Mountains', 'Beaches', 'Birds', 'Food'];

  return (
    <div className="category-buttons">
      {categories.map((category, index) => (
        <button
          key={index}
          className="category-button"
          onClick={() => onSelectCategory(category.toLowerCase())}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryButtons;
