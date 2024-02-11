import React from 'react';

const ContentList = ({ contents }) => {
  return (
    <div className="content-list">
      {contents.map((content, index) => (
        <div key={index} className="content-item">
          <h3>{content.title}</h3>
          <p>{content.introduction}</p>
          {/* Render other parts of content as needed */}
        </div>
      ))}
    </div>
  );
};

export default ContentList;
