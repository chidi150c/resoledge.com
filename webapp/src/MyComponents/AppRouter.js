// src/components/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import ITAcademy from './ITAcademy';
import Forex from './Forex';
import Jumbo from './Jumbo';
import CourseDetail from './CourseDetail'; // Import the new component

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/academy" element={<ITAcademy />} />
        <Route path="/academy/course/:courseId" element={<CourseDetail />} /> {/* Dynamic route for course details */}
        <Route path="/courseshow" element={<Jumbo />} />
        <Route path="/forex" element={<Forex />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
