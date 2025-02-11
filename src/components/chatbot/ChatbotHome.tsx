// src/components/chatbot/ChatbotHome.tsx
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ChatbotHomeProps {
  onPreloadedMessageClick: (message: string) => void;
}

const preloadedMessages = [
  "Check service status",
  "Chat with model",
  "FAQ",
];

const ChatbotHome: React.FC<ChatbotHomeProps> = ({ onPreloadedMessageClick }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Hi 👋</h2>
      <p className="text-gray-600 mb-6 text-center">
        How can we help you today?
      </p>
      <div className="w-full space-y-3">
        {preloadedMessages.map((msg, index) => (
          <button
            key={index}
            onClick={() => onPreloadedMessageClick(msg)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg transition transform hover:bg-gray-50 hover:shadow-md hover:scale-105 focus:outline-none"
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">{msg}</span>
              <ExternalLink size={20} className="text-gray-500" />
            </div>
          </button>
        ))}
      </div>
      <button
        onClick={() => onPreloadedMessageClick("Contact Support")}
        className="mt-6 w-full px-4 py-3 bg-blue-700 text-white rounded-lg transition transform hover:bg-indigo-700 hover:shadow-md hover:scale-105 focus:outline-none"
      >
        Contact Support
      </button>
    </div>
  );
};

export default ChatbotHome;
