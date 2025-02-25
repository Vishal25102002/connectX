import React, { useEffect, useRef } from 'react';
import liauser from "../../assets/liauser.png";
import Liabot from "../../assets/LiaBot.jpg";
import "../../App.css"
export interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date; // Added timestamp property
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const formatTime = (timestamp: Date) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="space-y-5 overflow-y-auto max-h-[400px] md:max-h-[500px] pr-2 scrollbar-hidden">
      {messages.map((msg) => {
        const isUser = msg.sender === 'user';
        return (
          <div key={msg.id} className={`flex items-start ${isUser ? 'justify-end' : 'justify-start'}`}>
            {!isUser && (
              <img src={Liabot} alt="Bot" className="w-10 h-10 mr-3 rounded-full shadow-md" />
            )}
            <div className={`p-5 rounded-xl max-w-xs md:max-w-sm break-words shadow-md transition-all duration-200 ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
              <div>{msg.text}</div>
              <div className={`text-xs mt-1 ${isUser ? 'text-gray-300 text-right' : 'text-gray-500 text-left'}`}>
                {formatTime(msg.timestamp)}
              </div>
            </div>
            {isUser && (
              <img src={liauser} alt="User" className="w-10 h-10 ml-3 p-2 rounded-full shadow-md bg-[#08dc72]" />
            )}
          </div>
        );
      })}
      <div ref={endRef} />
    </div>
  );
};

export default MessageList;
