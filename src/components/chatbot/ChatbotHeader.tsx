// src/components/chatbot/ChatbotHeader.tsx
import React, { useState, useEffect } from 'react';
import { X, RotateCcw } from 'lucide-react';
import lycaMobile from "../../assets/lycaMobile.jpeg";

interface ChatbotHeaderProps {
  onClose: () => void;
  onReset: () => void;
}

const ChatbotHeader: React.FC<ChatbotHeaderProps> = ({ onClose, onReset }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white text-black rounded-t-3xl shadow-lg">
      {/* Timestamp on the left */}
      <div className="flex flex-col items-start text-sm">
        <span className="font-semibold">{formatDate(currentTime)}</span>
        <span>{formatTime(currentTime)}</span>
      </div>

      {/* Centered Logo */}
      <img
        src={lycaMobile}
        alt="Logo"
        className="h-8 w-auto"
      />

      {/* Reset & Close Buttons on the right */}
      <div className="flex space-x-3">
        <button
          onClick={onReset}
          className="p-2 rounded-full bg-transparent text-black transition-transform duration-300 ease-in-out hover:bg-gray-300 hover:scale-105 focus:outline-none"
          title="Reset Chat"
        >
          <RotateCcw size={20} />
        </button>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-transparent text-black transition-transform duration-300 ease-in-out hover:bg-gray-300 hover:scale-105 focus:outline-none"
          title="Close Chat"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatbotHeader;