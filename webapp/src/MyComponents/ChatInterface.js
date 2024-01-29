import React, { useState } from 'react';

function ChatInterface() {
    const [userInput, setUserInput] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://flask-app:5000/generate_content', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user_input: userInput }),
            });

            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const data = await response.json();
            setResponse(data.generated_content);
            setError('');
        } catch (error) {
            console.error(`Error: ${error}`);
            setResponse('');
            setError('An error occurred while fetching data.');
        }
    };

    return (
        <div className="chat-interface">
            <div className="chat-header">Chat with GPT-3</div>
            <div className="chat-messages">
                <div className="chat-message">Hello! How can I assist you today?</div>
                <div className="chat-message user">{userInput}</div>
                <div className="chat-message assistant">{response}</div>
                {error && <div className="chat-error">{error}</div>}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button onClick={handleSubmit}>Send</button>
            </div>
        </div>
    );
}

export default ChatInterface;
