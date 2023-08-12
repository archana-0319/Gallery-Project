import React, { useState, useEffect } from 'react';
import TextAreaButton from './components/TextAreaButton';
import CategoryButtons from './components/CategoryButtons';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryImages, setCategoryImages] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      import(`./components/${selectedCategory}`).then((images) => {
        setCategoryImages(images.default);
      });
    }
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <TextAreaButton />
      <CategoryButtons onSelectCategory={handleCategoryChange} />
      <h1> <i> Picture Of Your Choice </i> </h1>
      <div className="image-grid">
        {categoryImages.map((image, index) => (
          <img key={index} src={image} alt={`/Image ${index + 1}`}/> 
        ))}
      </div>
    </div>
  );
}

export default App;
