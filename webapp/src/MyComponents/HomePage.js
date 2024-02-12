// src/HomePage.js
import React, { useState, useEffect } from 'react';
import Course from './course';
import SearchBar from './SearchBar'; // Ensure this component is correctly implemented
import '../App.css'; // Verify this path is correct for your project structure

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Mock initial data load, replace or remove this with actual data fetching if needed
    setIsLoading(false);
  }, []);

const handleSearch = async (query) => {
  setIsLoading(true);
  setError(null);
  try {
    const response = await fetch('http://localhost:35260/chat_generate', {  // Ensure this is the correct endpoint
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

    // Assuming newContent is a single course object, append it directly
    setCourses(prevCourses => [...prevCourses, newContent]);
    
  } catch (error) {
    console.error("Failed to fetch content:", error);
    setError('Failed to load search results. Please try again later.');
  }
  setIsLoading(false);
};

  if (error) {
    return <p>Error loading courses: {error}</p>;
  }

  return (
    <div className="homepage">
      <h1>IT Academy Courses</h1>
      <SearchBar onSearch={handleSearch} />
      {isLoading ? (
        <p>Loading courses...</p>
      ) : (
        <div className="courses-grid">
          {Array.isArray(courses) && courses.map(course => (
            <Course key={course.id} {...course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
