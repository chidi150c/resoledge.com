// src/HomePage.js
import React, { useState, useEffect } from 'react'; // Import useState and useEffect separately
import courses from './coursesData';
import Course from './course'; // Make sure the import matches the filename case
import '../App.css'; // Make sure this path is correct based on your file structure

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true); // Use the useState hook inside the component

  // Use the useEffect hook inside the component
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // simulates a fetch call
  }, []);

  // Render a loading message if isLoading is true
  return (
    <div className="homepage">
      <h1>IT Academy Courses</h1>
      {isLoading ? <p>Loading courses...</p> : (
        <div className="courses-grid">
          {courses.map(course => (
            <Course key={course.id} {...course} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
