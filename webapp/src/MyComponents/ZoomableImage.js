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

  return (
    <div>
      <button onClick={handleZoomIn}>Zoom In</button>
      <button onClick={handleZoomOut}>Zoom Out</button>
      <div
        style={{
          overflow: 'hidden',
          maxWidth: '100%', 
          maxHeight: '590px' ,
        }}
      >
        <img        
          src={src}
          alt="Zoomable Image"
          style={{
            width: '100%',
            height: '100%',
            transform: `scale(${zoom})`,
            transformOrigin: '0 0',
          }}
        />
      </div>
    </div>
  );
}

export default ZoomableImage;
