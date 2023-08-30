import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import ITAcademy from './ITAcademy';
import Forex from './Forex';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/academy" element={<ITAcademy />} />
        <Route path="/forex" element={<Forex />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
