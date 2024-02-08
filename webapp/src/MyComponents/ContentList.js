import React from 'react';

function ContentList({ contents }) {
  return (
    <div>
      {contents.map((content, index) => (
        <div key={index}>
          <h3>{content.title}</h3>
          <p>{content.description}</p>
          <a href={content.url} target="_blank" rel="noopener noreferrer">Watch Now</a>
        </div>
      ))}
    </div>
  );
}

export default ContentList;
