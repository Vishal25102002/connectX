// src/components/chatbot/MessageList.tsx
import React, { useEffect, useRef } from 'react';
import userIcon from '../../assets/boy_14382154.png';
import botIcon from '../../assets/chatbot_15320466.png';

export interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="space-y-4 overflow-y-hidden max-h-[400px] md:max-h-[500px] pr-2">
      {messages.map((msg) => {
        const isUser = msg.sender === 'user';
        return (
          <div
            key={msg.id}
            className={`flex items-start ${isUser ? 'justify-end' : 'justify-start'}`}
          >
            {!isUser && (
              <img
                src={botIcon}
                alt="Bot"
                className="w-8 h-8 md:w-10 md:h-10 mr-2 rounded-full shadow mix-blend-multipy"
              />
            )}
            <div
              className={`p-3 rounded-xl max-w-xs md:max-w-sm break-words shadow-md object-cover transition-all duration-200 ${
                isUser
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {msg.text}
            </div>
            {isUser && (
              <img
                src={userIcon}
                alt="User"
                className="w-8 h-8 md:w-10 md:h-10 ml-2 rounded-full shadow"
              />
            )}
          </div>
        );
      })}
      <div ref={endRef} />
    </div>
  );
};

export default MessageList;
