import React, { useState } from 'react';

function ChatInterface() {
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSubmit = async () => {
    // Add user's message to chat messages
    setChatMessages([...chatMessages, { text: userMessage, type: 'user' }]);
    
    // Send the user's message to the Flask server
    const response = await fetch('http://localhost:5000/generate_content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_input: userMessage }),
    });

    if (response.ok) {
      const data = await response.json();
      const generatedContent = data.generated_content;

      // Add the generated content to chat messages
      setChatMessages([...chatMessages, { text: generatedContent, type: 'bot' }]);
    }

    // Clear the input field
    setUserMessage('');
  };

  return (
    <div className="chat-interface">
      <div className="chat-header">Chat with GPT-3</div>
      <div className="chat-messages">
        {chatMessages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.type === 'bot' ? 'bot-message' : 'user-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={userMessage}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
}

export default ChatInterface;
