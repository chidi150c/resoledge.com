import React, { Component } from "react";
import * as WebSocket from "websocket";
import trading2 from '../Assets/trading2.PNG'; 
import TradingDashboard from "./TradingDashboard";

class ImageReceiver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: "",  // Initialize with empty string
    };
    this.socket = new WebSocket.w3cwebsocket("ws://localhost:35260/ImageReceiver/ws"); //176.58.125.70  localhost
  }

  componentDidMount() {
    this.socket.onopen = () => {
      console.log("WebSocket connected");
    };

    this.socket.onmessage = (event) => {
      const receivedData = event.data;
      this.setState({
        imageData: receivedData,
      });
    };

    this.socket.onclose = () => {
      console.log("WebSocket closed");
    };
  }

  componentWillUnmount() {
    if (this.socket.readyState === WebSocket.OPEN) {
        // Delay the closing of the WebSocket by 3 minutes (180000 milliseconds)
        const delay = 180000; // 3 minutes in milliseconds
        setTimeout(() => {
          this.socket.close();
        }, delay);
      }
  }

  render() {
   
    return (
      <div className="w3-panel">
        <div className="w3-row-padding" style={{margin: '19px'}}>
          <div className="header">
            <h2 style={{color: 'white'}}><b>My Automatic Cryptocurrency Trading Dashboard</b></h2>
          </div>
          <div className="w3-container">
            <TradingDashboard imageSrc={this.state.imageData ? `data:image/png;base64,${this.state.imageData}` : ""} />
          </div>
        </div>
      </div>
      //   <div className="graph-container">
      //       <div className="rtc1">        
      //           
      //           
      //       </div>
      //       <div className="rtc2">
      //           <h2><b>Trading Statistics</b></h2>
              
      //       </div>
      //       <div className="rtc2"> 
      //       

      //       </div>
      //  </div>
    );
  }
}
export default ImageReceiver;
