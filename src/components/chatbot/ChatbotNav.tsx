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
    <div className="flex justify-around items-center p-3 border-t bg-white shadow-sm">
      <button
        onClick={onHomeClick}
        className={`flex flex-col items-center transition-colors duration-200 ${
          activeTab === 'home' ? 'text-indigo-600 font-semibold' : 'text-gray-500'
        }`}
      >
        <img
          src={homeIcon}
          alt="Home"
          className="w-6 h-6 md:w-7 md:h-7"
        />
        <span className="text-xs md:text-sm">Home</span>
      </button>
      <button
        onClick={onChatClick}
        className={`flex flex-col items-center transition-colors duration-200 ${
          activeTab === 'chat' ? 'text-indigo-600 font-semibold' : 'text-gray-500'
        }`}
      >
        <img
          src={chatIcon}
          alt="Chat"
          className="w-6 h-6 md:w-7 md:h-7"
        />
        <span className="text-xs md:text-sm">Chat</span>
      </button>
    </div>
  );
};

export default ChatbotNav;
