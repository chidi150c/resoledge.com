import React, { Component } from "react";
import * as WebSocket from "websocket";
import trading2 from '../Assets/trading2.PNG'; 

class ImageReceiver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: "",  // Initialize with empty string
    };
    this.socket = new WebSocket.w3cwebsocket("ws://176.58.125.70:35260/ImageReceiver/ws");
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
    console.log("ImageData:", this.state.imageData);

    // If imageData is not empty, create a data URL for the image
    const imageSrc = this.state.imageData
      ? `data:image/png;base64,${this.state.imageData}`
      : "";

    return (
      <div className="w3-panel">
        <div className="w3-row-padding" style={{margin: '19px', padding: '18px 8px'}}>
          <div className="w3-half" >
          <h2 style={{color: 'white'}}><b>My Automatic Cryptocurrency Dashboard</b></h2>
              {imageSrc && (
                  <img
                  src={imageSrc}
                  alt="Received Image" 
                  style={{ maxWidth: "100%", maxHeight: "590px" }}         
                  />
              )}            
          </div>
          <div className="w3-quarter">
            <h2 style={{color: 'white'}}>Feeds</h2>
            <table className="w3-table w3-striped w3-white">
              <tr>
                <td><i className="fa fa-user w3-text-blue w3-large"></i></td>
                <td>New record, over 90 views.</td>
                <td><i>10 mins</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-bell w3-text-red w3-large"></i></td>
                <td>Database error.</td>
                <td><i>15 mins</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-users w3-text-yellow w3-large"></i></td>
                <td>New record, over 40 users.</td>
                <td><i>17 mins</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-comment w3-text-red w3-large"></i></td>
                <td>New comments.</td>
                <td><i>25 mins</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-bookmark w3-text-blue w3-large"></i></td>
                <td>Check transactions.</td>
                <td><i>28 mins</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-laptop w3-text-red w3-large"></i></td>
                <td>CPU overload.</td>
                <td><i>35 mins</i></td>
              </tr>
              <tr>
                <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
                <td>New shares.</td>
                <td><i>39 mins</i></td>
              </tr>
            </table>
          </div>
          <div className="w3-quarter" style={{padding: '35px 10px'}}>
            <img src={trading2} width="100%" height={"410px"} alt="Trading Chart" />            
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
