import React from 'react';
import Header from './Header';
import Footer from './Footer'
import Ourskills from './Ourskills';
import trading2 from '../Assets/trading2.PNG'
import genai from '../Assets/genai.PNG'
import aiagent from '../Assets/aiagent.PNG'
import ChatInterface from './ChatInterface';
import SearchBar from './SearchBar';
import ContentList from './ContentList';

function ITAcademy() {

  return (
    <div>
      <Header/>
      {/* !PAGE CONTENT! */}
      <div className="w3-main" style={{marginleft:'300px'}}>

        {/* Header */}
        <header className="header-it" id="portfolio">
          <div className="w3-container">
            <h1><b>Resoledge E-Learning</b></h1>
            <div className="w3-section w3-bottombar w3-padding-16">
              <span className="w3-margin-right">Filter:</span> 
              <button className="w3-button w3-black">ALL</button>
              <button className="w3-button w3-white"><i className="fa fa-diamond w3-margin-right"></i>Design</button>
              <button className="w3-button w3-white w3-hide-small"><i className="fa fa-photo w3-margin-right"></i>Photos</button>
              <button className="w3-button w3-white w3-hide-small"><i className="fa fa-map-pin w3-margin-right"></i>Art</button>
            </div>
          </div>
        </header>
        
        {/* First Photo Grid*/}
        <div className="w3-row-padding">
          <div className="w3-third w3-container w3-margin-bottom">            
            <a href="/courseshow">
            <img src={genai} alt="Norway" style={{width:'100%'}} className="w3-hover-opacity"/>
            </a>
            <div className="w3-container w3-white">
            <a href="/courseshow"><p><b>Generative AI Training</b></p></a>
              <p>Dive into the exciting realm of Generative AI with this introductory course. Learn about the technology powering creative AI applications, from text generation to digital art. Ideal for beginners, this course demystifies AI creativity and showcases its potential in various sectors."</p>
            </div>
          </div>
          <div className="w3-third w3-container w3-margin-bottom">
            <ContentList/>
          </div>
          {/* <div className="w3-third w3-container">
            <img src={trading2} alt="Norway" style={{width:'100%'}} className="w3-hover-opacity"/>
            <div className="w3-container w3-white">
              <p><b>Lorem Ipsum</b></p>
              <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            </div>
          </div> */}
        </div>
        
        {/* Second Photo Grid*/}
        {/* <div className="w3-row-padding">
          <div className="w3-third w3-container w3-margin-bottom">
            <img src={trading2} alt="Norway" style={{width:'100%'}} className="w3-hover-opacity"/>
            <div className="w3-container w3-white">
              <p><b>Lorem Ipsum</b></p>
              <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            </div>
          </div>
          <div className="w3-third w3-container w3-margin-bottom">
            <img src={trading2} alt="Norway" style={{width:'100%'}} className="w3-hover-opacity"/>
            <div className="w3-container w3-white">
              <p><b>Lorem Ipsum</b></p>
              <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            </div>
          </div>
          <div className="w3-third w3-container">
            <img src={trading2} alt="Norway" style={{width:'100%'}} className="w3-hover-opacity"/>
            <div className="w3-container w3-white">
              <p><b>Lorem Ipsum</b></p>
              <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            </div>
          </div>
        </div> */}

        {/* Pagination */}
        <div className="w3-center w3-padding-32">
          <div className="w3-bar">
            <a href="#" className="w3-bar-item w3-button w3-hover-black">«</a>
            <a href="#" className="w3-bar-item w3-black w3-button">1</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">2</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">3</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">4</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">»</a>
          </div>
        </div>

        {/* Images of Me */}
        <div className="w3-row-padding w3-padding-16" id="about">
          <div className="w3-col m6">
            <ChatInterface/>
          </div>
          <div className="w3-col m6">
            <img src={trading2} alt="Me" style={{width:'100%'}}/>
          </div>
        </div>
      {/* End page content */}
      <SearchBar/>
      </div>
      <Ourskills />
      <Footer/>
    </div>
  );
}

export default ITAcademy;
