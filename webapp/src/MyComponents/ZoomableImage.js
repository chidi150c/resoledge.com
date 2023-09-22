import React, { useState } from 'react';

function ZoomableImage({ src }) {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    const newZoom = zoom + 0.1;
    const integerZoom = convertReactZoomToIntegerZoom(newZoom);
    updateZoomedImage(integerZoom); // Send the new zoom value to the backend
    setZoom(newZoom); // Update the zoom state
  };

  const handleZoomOut = () => {
    if (zoom > 0.1) {
      const newZoom = zoom - 0.1;      
      const integerZoom = convertReactZoomToIntegerZoom(newZoom);
      updateZoomedImage(integerZoom); // Send the new zoom value to the backend
      setZoom(newZoom); // Update the zoom state
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
            transform: `scale(${zoom})`,
            transformOrigin: 'center center',
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
  fetch('/updateZoom', {
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

// Define a function to convert React zoom to integer zoom
const convertReactZoomToIntegerZoom = (reactZoom) => {
  // Convert the React zoom (0.1, 0.2, etc.) to an integer (10, 20, etc.)
  return Math.round(reactZoom * 10);
};