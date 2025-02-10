// src/components/chatbot/ChatbotLoader.tsx
import React from 'react';

const ChatbotLoader: React.FC = () => {
  return (
    <>
      {/* Define keyframes for the bouncing animation */}
      <style>
        {`
          @keyframes bounceTyping {
            0%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-8px);
            }
          }
        `}
      </style>
      
      <div className="flex items-center space-x-1 mt-2">
        <div
          className="w-2 h-2 bg-indigo-400 rounded-full"
          style={{
            animation: 'bounceTyping 1.4s infinite',
            animationDelay: '0s',
          }}
        ></div>
        <div
          className="w-2 h-2 bg-indigo-400 rounded-full"
          style={{
            animation: 'bounceTyping 1.4s infinite',
            animationDelay: '0.2s',
          }}
        ></div>
        <div
          className="w-2 h-2 bg-indigo-400 rounded-full"
          style={{
            animation: 'bounceTyping 1.4s infinite',
            animationDelay: '0.4s',
          }}
        ></div>
      </div>
    </>
  );
};

export default ChatbotLoader;
