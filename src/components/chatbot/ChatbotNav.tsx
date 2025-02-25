// src/components/chatbot/ChatbotNav.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faComments } from '@fortawesome/free-solid-svg-icons';

interface ChatbotNavProps {
  onHomeClick: () => void;
  onChatClick: () => void;
  activeTab: 'home' | 'chat';
}

const ChatbotNav: React.FC<ChatbotNavProps> = ({ onHomeClick, onChatClick, activeTab }) => {
  return (
    <div className="flex justify-around items-center p-4">
      <button
        onClick={onHomeClick}
        className={`flex flex-col items-center transition-colors duration-300 ease-in-out p-4 rounded-lg ${
          activeTab === 'home' ? 'text-blue-600 font-bold' : 'text-gray-600'
        } hover:text-blue-500 focus:text-blue-500 focus:outline-none hover:shadow-lg bg-transparent hover:bg-gray-100`}
      >
        <FontAwesomeIcon icon={faHome} className="w-8 h-8" />
        <span className="text-xs mt-1">Home</span>
      </button>
      <button
        onClick={onChatClick}
        className={`flex flex-col items-center transition-colors duration-300 ease-in-out p-4 rounded-lg ${
          activeTab === 'chat' ? 'text-blue-600 font-bold' : 'text-gray-600'
        } hover:text-blue-500 focus:text-blue-500 focus:outline-none hover:shadow-lg bg-transparent hover:bg-gray-100`}
      >
        <FontAwesomeIcon icon={faComments} className="w-8 h-8" />
        <span className="text-xs mt-1">Chat</span>
      </button>
    </div>
  );
};

export default ChatbotNav;