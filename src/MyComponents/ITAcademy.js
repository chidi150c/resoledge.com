// import React from 'react';
// import { Link } from 'react-router-dom';

// function ITAcademy(){
  // return (
//   );
// };
import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

function ITAcademy() {
  return (
    <div>
      <Header />
      <div className='w3-white'>
        <header>
          <h1>IT Academy</h1>
        </header>

        <nav>
          <ul>
            <li><Link to="/academy">Home</Link></li>
            <li><Link to="/academy">Courses</Link></li>
            <li><Link to="/academy">Instructors</Link></li>
            <li><Link to="/academy">Events</Link></li>
            <li><Link to="/academy">ContLinkct</Link></li>
          </ul>
        </nav>

        <main>
          <h2>Welcome to IT Academy</h2>
          <p>Learn the latest technologies and advance your IT skills with our comprehensive courses.</p>
          <p>Explore our courses, meet our expert instructors, and stay updated with upcoming events.</p>

          <div className="image">
            <img src="course1.jpg" alt="Course 1" />
          </div>

          <div className="image">
            <img src="instructor1.jpg" alt="Instructor 1" />
          </div>

          <div className="image">
            <img src="event1.jpg" alt="Event 1" />
          </div>
        </main>

        <footer>
          &copy; 2023 IT Academy. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
export default ITAcademy;
