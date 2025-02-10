// src/components/chatbot/ChatbotHeader.tsx
import React from 'react';
import { X } from 'lucide-react';
import chatbotlogo from "../../assets/chatbotlogo.jpg";

interface ChatbotHeaderProps {
  onClose: () => void; // Triggers chatbot close
}

const ChatbotHeader: React.FC<ChatbotHeaderProps> = ({ onClose }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-indigo-600 text-white rounded-t-xl">
      <div className="flex items-center space-x-3">
        <img
          src={chatbotlogo}
          alt="Logo"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full"
        />
        <h2 className="text-xl md:text-2xl font-semibold">TerraBot</h2>
      </div>
      <button
        onClick={onClose}
        className="p-2 hover:bg-indigo-700 rounded-full transition-colors duration-200 bg-indigo-600 focus:outline-none"
      >
        <X size={24} /> {/* Close button */}
      </button>
    </div>
  );
};

export default ChatbotHeader;
