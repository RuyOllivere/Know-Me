import { Frame, Button } from '@react95/core';
import type { FC } from 'react';
import { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

interface ChatProps {
  onClose?: () => void;
}

const socket = io("https://chat-server-production-f5f9.up.railway.app");

const Chat: FC<ChatProps> = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    socket.on('chat message', (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = () => {
    if (message.trim()) {
      socket.emit('chat message', message);
      setMessage('');
    }
  };

  return (
    <Frame
      bg="white"
      boxShadow="in"
      style={{
        padding: 24,
        minWidth: 320,
        position: 'relative',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: 'MS Sans Serif',
            fontSize: 22,
            color: '#222',
          }}
        >
          Chat.exe
        </h2>
        {onClose && <Button onClick={onClose}>X</Button>}
      </div>

      <div
        style={{
          fontFamily: 'MS Sans Serif',
          fontSize: 14,
          color: '#222',
          flex: 1,
          overflowY: 'auto',
          marginBottom: 10,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              padding: '8px',
              margin: '4px 0',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ccc',
              borderRadius: '20px',
              maxWidth: '80%',
            }}
          >
            {msg}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: '8px',
            boxSizing: 'border-box',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </Frame>
  );
};

export default Chat;
