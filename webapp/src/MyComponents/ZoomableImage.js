import React, { useState } from 'react';

function ZoomableImage({ src }) {
  const [zoom, setZoom] = useState(100);
  const handleZoomIn = () => {
    var newZoom = zoom - 10;    
    if (newZoom >= 10) {
      setZoom(newZoom); // Update the zoom state
      updateZoomedImage(newZoom); // Send the new zoom value to the backend
    }
  };

  const handleZoomOut = () => {
    var newZoom = zoom + 10;       
    if (newZoom <= 490) {
      setZoom(newZoom); // Update the zoom state
      updateZoomedImage(newZoom); // Send the new zoom value to the backend
    }
  };

  return (
    <div>
      <div className="zoom-buttons">
        <button className="zoom-button" onClick={handleZoomIn}>
          + Zoom In
        </button>
        <button className="zoom-button" onClick={handleZoomOut}>
          - Zoom Out
        </button>
      </div>
      <div
        className="image-container"
        style={{
          overflow: 'auto',
          maxWidth: '100%',
          maxHeight: '605px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={src}
          alt="Zoomable Image"
          style={{
            maxWidth: '100%',
            height: 'auto',
            // transform: `scale(${zoom})`,
            // transformOrigin: 'center center',
          }}
        />
      </div>
    </div>
  );
}

export default ZoomableImage;

// Function to send the zoom value to the backend
const updateZoomedImage = (zoom) => {
  // You can use fetch or any other method to send the zoom value to the backend
  // For example, if you have an API endpoint to update the zoom value:
  fetch('http://176.58.125.70:35260/updateZoom', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ zoom }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    })
    .catch((error) => {
      console.error('Error updating zoom:', error);
    });
};
