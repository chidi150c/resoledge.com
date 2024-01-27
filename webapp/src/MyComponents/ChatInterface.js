import React, { useState, useEffect } from 'react';

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Add user's message to the chat
    setMessages([...messages, { text: inputMessage, type: 'user' }]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate ChatGPT response (you would replace this with actual API calls)
    setTimeout(() => {
      const responseMessage = { text: 'This is a sample response from ChatGPT.', type: 'bot' };
      setMessages([...messages, responseMessage]);
      setIsTyping(false);
    }, 1000);
  };

  useEffect(() => {
    // Scroll to the bottom of the chat when a new message is added
    const chatContainer = document.getElementById('chat-container');
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-interface">
      <div id="chat-container" className="chat-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.type === 'bot' ? 'bot-message' : 'user-message'}`}
          >
            {message.text}
          </div>
        ))}
        {isTyping && <div className="bot-typing">ChatGPT is typing...</div>}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatInterface;
