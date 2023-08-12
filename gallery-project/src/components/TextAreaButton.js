import React from 'react';
import './styles/textAreaBtn.css'

function TextAreaButton() {
  return (
    <div>
      <h1 className='heading'> SnapShot </h1>
      <div className="text-area-button-container">
        <input className="text-area" placeholder="Search Categories..."></input>
        <button className="search-button">
          <span role="img" aria-label="Search Icon">🔍</span>
        </button>
      </div>
    </div>
  );
}

export default TextAreaButton;
