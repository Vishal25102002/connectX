// src/components/chatbot/ChatbotLoader.tsx
import React from 'react';

const ChatbotLoader: React.FC = () => {
  return (
    <div className="flex items-center mt-2">
      <style>
        {`
          @keyframes bounce {
            0%, 80%, 100% {
              transform: translateY(0);
              opacity: 0.5;
            }
            40% {
              transform: translateY(-4px);
              opacity: 1;
            }
          }
        `}
      </style>
      <div className="flex space-x-1">
        <div
          className="w-2 h-2 bg-blue-500 rounded-full"
          style={{ animation: 'bounce 1s infinite', animationDelay: '0s' }}
        ></div>
        <div
          className="w-2 h-2 bg-blue-500 rounded-full"
          style={{ animation: 'bounce 1s infinite', animationDelay: '0.2s' }}
        ></div>
        <div
          className="w-2 h-2 bg-blue-500 rounded-full"
          style={{ animation: 'bounce 1s infinite', animationDelay: '0.4s' }}
        ></div>
      </div>
    </div>
  );
};

export default ChatbotLoader;
