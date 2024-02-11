// src/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(input);
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <input
          className="search-input"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Search courses..."
        />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
