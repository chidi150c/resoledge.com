import React from 'react';
import '../App';
import { Carousel } from 'react-responsive-carousel';

function Jumbo() {
  return (   
    <div>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div className="bgimg-1 w3-display-container w3-grayscale-min" id="home">
          <div className="w3-display-left w3-text-white" style={{padding:'48px'}}>
            <span className="w3-jumbo w3-hide-small">Delivering innovative solutions powered by cutting-edge technologies.</span><br />
            <span className="w3-xxlarge w3-hide-large w3-hide-medium">Delivering resourceful solutions</span><br />
            <span className="w3-large">Cutting-edge technology technology solutions delivered resourcefully.</span>
            <p><a href="#about" className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">Learn more and start today</a></p>
          </div> 
        </div>    
        <div className="bgimg-2 w3-display-container w3-grayscale-min" id="home">
          <div className="w3-display-left" style={{color: 'rgb(101 104 243)', padding:'48px'}}>
            <span className="w3-jumbo w3-hide-small">Focus on your core business while we handle your IT infrastructure, support, and maintenance.</span><br />
            <span className="w3-xxlarge w3-hide-large w3-hide-medium">Focus on your core business, we'll handle the rest.</span><br />
            <span className="w3-large">Save time spent on non-core business tasks.</span>
            <p><a href="#about" className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">Learn more and start today</a></p>
          </div> 
        </div>    
        <div className="bgimg-3 w3-display-container w3-grayscale-min" id="home">
          <div className="w3-display-left w3-text-white" style={{padding:'48px'}}>
            <span className="w3-jumbo w3-hide-small">We provide strategic technology guidance to help you achieve your goals.</span><br />
            <span className="w3-xxlarge w3-hide-large w3-hide-medium">Strategic technology guidance for your business goals.</span><br />
            <span className="w3-large"> Leverage technology to achieve your business goals efficiently.</span>
            <p><a href="#about" className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">Learn more and start today</a></p>
          </div> 
        </div>
      </Carousel>
    </div>   
    );
    }

    export default Jumbo;
