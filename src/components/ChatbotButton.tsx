import React from 'react';
import { FiSend } from 'react-icons/fi';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { BsEmojiSmile } from 'react-icons/bs';

interface ChatbotButtonProps {
  type: 'send' | 'emoji' | 'pdf';
  onClick: () => void;
}

const ChatbotButton: React.FC<ChatbotButtonProps> = ({ type, onClick }) => {
  const getIcon = () => {
    switch (type) {
      case 'send':
        return <FiSend />;
      case 'emoji':
        return <BsEmojiSmile />;
      case 'pdf':
        return <AiOutlineFilePdf />;
      default:
        return null;
    }
  };

  return (
    <button
      onClick={onClick}
      className=" text-blue-600 p-2 rounded-full hover:bg-blue-100 focus:outline-none transition-transform transform hover:scale-105"
    >
      {getIcon()}
    </button>
  );
};

export default ChatbotButton;
