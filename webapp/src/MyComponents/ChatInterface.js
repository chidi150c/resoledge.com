import React from 'react';

function ChatInterface() {
  return (
    <div className="chat-interface">
      <div className="chat-header">Chat with GPT-3</div>
      <div className="chat-messages">
        {/* Messages from the chat go here */}
        <div className="chat-message">Hello! How can I assist you today?</div>
        {/* Add more chat messages as needed */}
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </div>
    </div>
  );
}

export default ChatInterface;
