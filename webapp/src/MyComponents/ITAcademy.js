import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ContentList from './ContentList';

function ITAcademy() {
  const [contents, setContents] = useState([]);

  const handleSearch = async (query) => {
    // Here, you'd call your backend or OpenAI API to get content based on `query`
    const url = `http://localhost:35260/chat_generate`; // Your backend endpoint
    try {
      const response = await fetch(url, {
        method: 'POST', // Assuming the backend expects a POST request
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }), // Assuming your backend expects the query in the body
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setContents(data.contents); // Assuming the response has a 'contents' field
    } catch (error) {
      console.error('Failed to fetch data:', error);
      // Handle the error (e.g., show an error message)
    }
    // For demonstration, we're using a static response
    const sampleContents = [
      { title: "Introduction to React", description: "Learn the basics of React.", url: "#" },
      // Add more samples or fetch from API
    ];

    setContents(sampleContents);
  };

  return (
    <div className="ITAcademy">
      <SearchBar onSearch={handleSearch} />
      <ContentList contents={contents} />
    </div>
  );
}

export default ITAcademy;
