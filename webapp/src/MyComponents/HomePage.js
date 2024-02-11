// src/HomePage.js
import React, { useState, useEffect } from 'react';
import courses from './coursesData';
import Course from './course';
import '../App.css'; // Assuming this is the correct path to your CSS file

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data with a timeout
    // Replace this with your actual data fetching logic
    setTimeout(() => {
      try {
        // Simulate setting courses data fetched successfully
        // In a real scenario, you'd replace this with a call to a backend service
        // If the call fails, you'd catch the error and set it with setError
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }, 2000);
  }, []);

  // If there's an error, display it
  if (error) {
    return <p>Error loading courses: {error}</p>;
  }

  // Render a loading message if isLoading is true
  return (
    <div className="homepage">
      <h1>IT Academy Courses</h1>
      {isLoading ? (
        <p>Loading courses...</p>
      ) : (
        <div className="courses-grid">
          {courses.map(course => (
            <Course key={course.id} {...course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
