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
    <div className="space-y-5 overflow-y-auto max-h-[400px] md:max-h-[500px] pr-2">
      {messages.map((msg) => {
        const isUser = msg.sender === 'user';
        return (
          <div key={msg.id} className={`flex items-start ${isUser ? 'justify-end' : 'justify-start'}`}>
            {!isUser && (
              <img src={botIcon} alt="Bot" className="w-10 h-10 mr-3 rounded-full shadow-md" />
            )}
            <div className={`p-5 rounded-xl max-w-xs md:max-w-sm break-words shadow-md transition-all duration-200 ${
              isUser ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'
            }`}>
              {msg.text}
            </div>
            {isUser && (
              <img src={userIcon} alt="User" className="w-10 h-10 ml-3 rounded-full shadow-md" />
            )}
          </div>
        );
      })}
      <div ref={endRef} />
    </div>
  );
};

export default MessageList;
