import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
function Header() {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const [menuVisible, setMenuVisible] = useState(false);
  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  useEffect(() => {
    // Hide menu and main content when screen width becomes larger than 800 pixels
    if (!isMobile) {
      setMenuVisible(false);
    }
  }, [isMobile]);

  return (
    <div className="w3-top"> 
      {/* Navbar (sit on top) */}
      <div className="w3-barmod w3-card" id="myNavbar" style={{backgroundColor:'rgb(177 177 177)'}}>
        <a href="#home" className="w3-bar-item w3-button w3-wide"><img src="/Logolast.png" style={{width: '42%' }} alt="" /></a>
        {/* Right-sided navbar links */}
        <div className="w3-right w3-hide-small">
          <Link to="/" className="w3-bar-item w3-button"><i className="fa fa-user"></i>HOME </Link>
          <Link to="/academy" className="w3-bar-item w3-button"><i className="fa fa-user"></i>ACADEMY</Link>
          <Link to="/forex" className="w3-bar-item w3-button"><i className="fa fa-th"></i>FOREX</Link>
          <Link to="/academy" className="w3-bar-item w3-button"><i className="fa fa-usd"></i> SIGN IN</Link>
          <Link to="/academy" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i> SIGN OUT</Link>
        </div>   
        
      {isMobile && (
        <button onClick={toggleMenu} class="w3-bar-item w3-button w3-right" style={{marginRight:'25px'}}>
          <i class="fa fa-bars"></i>
        </button>
      )}
    <div>
      {menuVisible && <div>
        {/* Sidebar on small screens when clicking the menu icon */}
        <nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" id="mySidebar">
          <Link to="/" className="w3-bar-item w3-button"><i className="fa fa-user"></i>HOME </Link>
          <Link to="/academy" className="w3-bar-item w3-button"><i className="fa fa-user"></i>ACADEMY</Link>
          <Link to="/forex" className="w3-bar-item w3-button"><i className="fa fa-th"></i>FOREX</Link>
          <Link to="/academy" className="w3-bar-item w3-button"><i className="fa fa-usd"></i> SIGN IN</Link>
          <Link to="/academy" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i> SIGN OUT</Link>
        </nav>
      </div>}
    </div>    
      </div>
    </div>
  );
}
export default Header;
