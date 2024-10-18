import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

interface Message {
  role: string;
  content: string;
}

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ messages, onSendMessage }) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div
      className="chat-container"
      style={{
        backgroundColor: '#0f3460',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
      }}
    >
      <div
        className="messages-area"
        style={{
          height: '500px',
          overflowY: 'auto',
          padding: '20px',
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              textAlign: message.role === 'user' ? 'right' : 'left',
              margin: '10px 0',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: message.role === 'user' ? '#16213e' : '#1a1a2e',
                color: message.role === 'user' ? '#fff' : '#b3c2bf',
              }}
            >
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} style={{ borderTop: '1px solid #324a60', padding: '20px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{
            width: 'calc(100% - 50px)',
            padding: '10px',
            border: '1px solid #324a60',
            borderRadius: '8px',
            backgroundColor: '#1a1a2e',
            color: '#b3c2bf',
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: '10px',
            padding: '10px',
            borderRadius: '8px',
            backgroundColor: '#0f3460',
            color: '#e0e0e0',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;
