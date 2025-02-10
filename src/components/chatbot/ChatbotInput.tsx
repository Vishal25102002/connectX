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
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-4 border-t bg-gray-50"
    >
      <input
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
      />
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileUpload}
      />
      <button
        type="button"
        onClick={triggerFileInput}
        className="p-2 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition-all"
      >
        <BiUpload size={24} />
      </button>
      <button
        type="submit"
        className="p-2 bg-indigo-600 text-white border border-indigo-600 rounded-full hover:bg-indigo-700 transition-all"
      >
        <AiOutlineSend size={24} />
      </button>
    </form>
  );
};

export default ChatbotInput;
