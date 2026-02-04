import { Frame, Button } from '@react95/core';
import type { FC } from 'react';
import { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import { useAuth } from '../store/auth'; // ajuste o caminho conforme seu projeto

interface ChatProps {
  onClose?: () => void;
}

interface ChatMessage {
  nickname: string;
  color: string;
  text: string;
}

interface UserInfo {
  nickname: string;
  color: string;
}

const socket = io("https://chat-server-3wda.onrender.com");

const generateRandomColor = () =>
  `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;

const Chat: FC<ChatProps> = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [connectedUsers, setConnectedUsers] = useState<UserInfo[]>([]);

  const nickname = useAuth((state) => state.nickname);

  const [userColor] = useState(() => generateRandomColor());

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    socket.emit('user info', { nickname, color: userColor });

    socket.on('chat message', (msg: ChatMessage) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on('users update', (users: UserInfo[]) => {
      setConnectedUsers(users);
    });

    return () => {
      socket.off('chat message');
      socket.off('users update');
    };
  }, [nickname, userColor]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: ChatMessage = {
        nickname,
        color: userColor,
        text: message,
      };

      socket.emit('chat message', newMessage);
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
        height: '350px',
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

      {/* Connected users */}
      <div
        style={{
          fontFamily: 'MS Sans Serif',
          fontSize: 12,
          color: '#222',
          marginBottom: 12,
          border: '1px solid #ccc',
          padding: 8,
          borderRadius: 4,
          maxHeight: 80,
          overflowY: 'auto',
          backgroundColor: '#f9f9f9',
        }}
      >
        <strong>Usuários conectados:</strong>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {connectedUsers.map((user, i) => (
            <li key={i} style={{ color: user.color }}>
              {user.nickname}
            </li>
          ))}
        </ul>
      </div>

      {/* Message area */}
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
            <strong style={{ color: msg.color }}>{msg.nickname}:</strong>{' '}
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Msg input */}
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
