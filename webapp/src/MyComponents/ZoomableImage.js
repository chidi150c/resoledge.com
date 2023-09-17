import React, { useState } from 'react';

function ZoomableImage({ src }) {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    setZoom(zoom + 0.1);
  };

  const handleZoomOut = () => {
    if (zoom > 0.1) {
      setZoom(zoom - 0.1);
    }
  };

  const handleResetZoom = () => {
    setZoom(1);
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
        <button className="reset-button" onClick={handleResetZoom}>
          Reset Zoom
        </button>
      </div>
      <div
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
            transform: `scaleX(${zoom})`, // Scale only horizontally
            transformOrigin: 'right center', // Set the transform origin to the right
            // transform: `scale(${zoom})`,
            // transformOrigin: 'center center',
          }}
        />
      </div>
    </div>
  );
}

export default ZoomableImage;
