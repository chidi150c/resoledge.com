import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ContentList from './ContentList';

function ITAcademy() {
    const [contents, setContents] = useState([]); // Store search results in an array
  
    const handleSearch = async (query) => {
      try {
        const response = await fetch('http://localhost:35260/chat_generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const newContent = await response.json();
        setContents(prevContents => [...prevContents, newContent]); // Append new content to the existing array
      } catch (error) {
        console.error("Failed to fetch content:", error);
        // Consider setting an error state and displaying an error message
      }
    };
  
    return (
      <div className="app">
        <SearchBar onSearch={handleSearch} />
        <ContentList contents={contents} /> // Pass the array of content to ContentList
      </div>
    );
  };  
export default ITAcademy;
