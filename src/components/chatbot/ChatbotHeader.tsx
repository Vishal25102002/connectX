// src/components/chatbot/ChatbotHeader.tsx
import React from 'react';
import { X } from 'lucide-react';
import chatbotlogo from "../../assets/chatbotlogo.jpg";

interface ChatbotHeaderProps {
  onClose: () => void;
}

const ChatbotHeader: React.FC<ChatbotHeaderProps> = ({ onClose }) => {
  return (
    <div className="flex items-center justify-between p-5 bg-blue-700 bg-opacity-90 text-white rounded-t-3xl shadow-lg">
      <div className="flex items-center space-x-4">
        <img
          src={chatbotlogo}
          alt="Logo"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white shadow-md"
        />
        <h2 className="text-xl md:text-3xl font-bold tracking-wide">TerraBot</h2>
      </div>
      <button
        onClick={onClose}
        className="p-2 hover:bg-blue-800 rounded-full transition-colors duration-200  bg-transparent focus:outline-none"
      >
        <X size={26} />
      </button>
    </div>
  );
};

export default ChatbotHeader;
