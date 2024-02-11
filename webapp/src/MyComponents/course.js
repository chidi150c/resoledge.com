// src/Course.js
import React from 'react';

const Course = ({ title, intro, imageUrl }) => (
  <div className="course">
    <img src={imageUrl} alt={`Cover for the course: ${title}`} />
    <h2>{title}</h2>
    <p>{intro}</p>
    <button className="course-button">Learn More</button>
  </div>
);

export default Course;
