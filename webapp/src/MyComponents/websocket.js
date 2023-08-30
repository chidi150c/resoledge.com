// websocket.js

// Function to establish a WebSocket connection
export function connectWebSocket() {
    const socket = new WebSocket('ws://your-backend-websocket-url');
  
    // Event listener for when the connection is established
    socket.onopen = event => {
      console.log('WebSocket connection established');
      // You can add additional logic here if needed
    };
  
    // Event listener for when a message is received from the server
    socket.onmessage = event => {
      console.log('Received message:', event.data);
      // You can parse the data and handle it accordingly
    };
  
    // Event listener for when the connection is closed
    socket.onclose = event => {
      if (event.wasClean) {
        console.log(`WebSocket connection closed cleanly, code=${event.code}, reason=${event.reason}`);
      } else {
        console.error('WebSocket connection closed unexpectedly');
      }
      // You can add additional logic here if needed
    };
  
    // Event listener for WebSocket errors
    socket.onerror = error => {
      console.error('WebSocket error:', error);
      // You can handle the error here
    };
  
    return socket;
  }
  