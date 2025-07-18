// src/components/chatbot/ChatbotInput.tsx
import React, { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

interface ChatbotInputProps {
  onSendMessage: (message: string) => void;
}

const ChatbotInput: React.FC<ChatbotInputProps> = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput('');
    }
  };


  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4 p-5 border-t border-blue-200 bg-white/95">
      <input
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
      />
      <button type="submit" className="p-3 bg-blue-600 text-white rounded-full border border-blue-600 hover:bg-blue-700 transition-colors">
        <AiOutlineSend size={20} />
      </button>
    </form>
  );
};

export default ChatbotInput;
