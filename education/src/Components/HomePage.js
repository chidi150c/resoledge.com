// src/HomePage.js
import React, { useState, useEffect } from 'react';
import Course from './course';
import '../App.css'; // Make sure this is the correct path to your CSS file

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://your-api-endpoint/courses', { // Replace with your actual endpoint
        method: 'GET', // The method is likely to be GET for fetching data
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCourses(data); // Assuming the JSON response is an array of courses
    } catch (error) {
      console.error("Failed to fetch courses:", error);
      setError('Failed to load courses. Please try again later.');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    
    fetchCourses();
  }, []);

  if (error) {
    return <p>Error loading courses: {error}</p>;
  }

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
