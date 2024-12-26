import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { MdSmartToy } from 'react-icons/md';

interface ChatbotHeaderProps {
  onClose: () => void;
}

const ChatbotHeader: React.FC<ChatbotHeaderProps> = ({ onClose }) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-3 flex justify-between items-center rounded-t-lg">
      <div className="flex items-center space-x-3">
        <MdSmartToy className="text-3xl" />
        <div>
          <span className="font-semibold text-lg">Chat with TerraBot</span>
          <p className="text-sm">We are online!</p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="bg-white p-1 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        aria-label="Close chatbot"
      >
        <AiOutlineClose className="text-indigo-600" size={20} />
      </button>
    </div>
  );
};

export default ChatbotHeader;
