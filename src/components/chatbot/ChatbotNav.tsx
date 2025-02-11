// src/components/chatbot/ChatbotNav.tsx
import React from 'react';
import homeIcon from '../../assets/house-cleaning_4767644.png';
import chatIcon from '../../assets/new-message_5617005.png';

interface ChatbotNavProps {
  onHomeClick: () => void;
  onChatClick: () => void;
  activeTab: 'home' | 'chat';
}

const ChatbotNav: React.FC<ChatbotNavProps> = ({ onHomeClick, onChatClick, activeTab }) => {
  return (
    <div className="flex justify-around items-center p-4 bg-white/90 backdrop-blur-sm border-t border-blue-200">
      <button
        onClick={onHomeClick}
        className={`flex flex-col items-center transition-colors duration-200 ${
          activeTab === 'home' ? 'text-blue-600 font-bold' : 'text-gray-500'
        }`}
      >
        <img src={homeIcon} alt="Home" className="w-8 h-8" />
        <span className="text-xs mt-1">Home</span>
      </button>
      <button
        onClick={onChatClick}
        className={`flex flex-col items-center transition-colors duration-200 ${
          activeTab === 'chat' ? 'text-blue-600 font-bold' : 'text-gray-500'
        }`}
      >
        <img src={chatIcon} alt="Chat" className="w-8 h-8" />
        <span className="text-xs mt-1">Chat</span>
      </button>
    </div>
  );
};

export default ChatbotNav;
