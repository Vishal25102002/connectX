// src/components/chatbot/ChatbotInput.tsx
import React, { useRef, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { BiUpload } from 'react-icons/bi';

interface ChatbotInputProps {
  onSendMessage: (message: string) => void;
}

const ChatbotInput: React.FC<ChatbotInputProps> = ({ onSendMessage }) => {
  const [input, setInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      onSendMessage(`Document uploaded: ${file.name}`);
      e.target.value = ''; // Reset file input
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
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
      <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileUpload} />
      <button type="button" onClick={triggerFileInput} className="p-3 bg-white rounded-full border border-gray-300 hover:bg-gray-200 transition-colors">
        <BiUpload size={20} />
      </button>
      <button type="submit" className="p-3 bg-blue-600 text-white rounded-full border border-blue-600 hover:bg-blue-700 transition-colors">
        <AiOutlineSend size={20} />
      </button>
    </form>
  );
};

export default ChatbotInput;
