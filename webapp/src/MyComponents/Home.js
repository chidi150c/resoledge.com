import React from 'react';
import '../App.css';
import Jumbo from './Jumbo';
import Ourskills from './Ourskills';
import { Link } from 'react-router-dom';
import Server1image from '../Assets/SERVER1.jpg';
import vsatImage from '../Assets/VSAT1.avif';
import Server2image from '../Assets/monitor.jpg';


function Home() {
    return (
      <div>
            <Jumbo />
            {/* Intro */}
            <div className="w3-row">
            <div className="w3-half w3-container">
                <h1 className="w3-xxlarge w3-text-light-grey">Hello</h1>
                <h1 className="w3-xxlarge w3-text-light-grey">We are</h1>
                <h1 className="w3-jumbo res-name">RESOLEDGE</h1>
            </div>
            <div className="w3-half w3-container w3-xlarge w3-text-light-grey">
                <p>Welcome to Resoledge! We are a leading provider of innovative technology solutions for businesses of all sizes. With our expertise and cutting-edge solutions, we help our clients thrive in the digital age. Explore our website to learn more about our services and how we can empower your business.</p>
            </div>
            </div>
            {/* Into Pics*/}
            <div className="w3-row">
            <div className="w3-half w3-container">
                <img src={Server1image} style={{width: '100%' }} alt="house" />
            </div>
            <div className="w3-half w3-container">
                <img src={Server2image} style={{width: '100%' }} alt="house" />
            </div>
            </div>
            {/* Promo Section - "About US" */}
            <div className="w3-row promo" id="work">
            <div className="w3-col m8 w3-container">
                <h1>About Us</h1>
                <h2>At Resoledge, we are passionate about technology and its potential to transform businesses. With a team of experienced professionals, we specialize in delivering tailored IT solutions that address our clients' unique challenges. From software development to network optimization, cloud computing and cybersecurity, we offer comprehensive services that drive growth and efficiency.</h2>
                <p><Link to="/academy" className="w3-button w3-black"><i className="fa fa-th"> </i> View Our Works</Link></p>
            </div>
            <div className="w3-col m4 w3-container w3-panel">
                <img src={vsatImage} alt="Buildings" width="100%" height="494" />
            </div>
            </div>  
            <Ourskills />
      </div>
    );
  }
  
  export default Home;
