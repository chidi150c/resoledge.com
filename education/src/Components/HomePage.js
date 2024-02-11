// src/HomePage.js
import React from 'react';
import courses from './coursesData';
import Course from './course';
import '../App.css'; // Assuming you have a CSS file for styling

const HomePage = () => (
  <div className="homepage">
    <h1>IT Academy Courses</h1>
    <div className="courses-grid">
      {courses.map(course => (
        <Course key={course.id} {...course} />
      ))}
    </div>
  </div>
);

export default HomePage;
