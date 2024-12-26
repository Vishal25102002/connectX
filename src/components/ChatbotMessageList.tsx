import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaUserCircle } from 'react-icons/fa';
import ChatbotHeader from './ChatbotHeader';
import ChatbotButton from './ChatbotButton';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'bot' | 'user'; text: string }[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [showOptions, setShowOptions] = useState(true);

  const toggleChatbot = () => setIsOpen(!isOpen);

  useEffect(() => {
    setMessages([
      { sender: 'bot', text: 'Hi there! 👋 How can I help you today?' },
    ]);
  }, []);

  const handleUserMessage = (message: string) => {
    if (!message.trim()) return;
    setMessages((prev) => [...prev, { sender: 'user', text: message }]);
    setInputMessage('');
    // API Call Placeholder
    fetchResponse(message);
  };

  const fetchResponse = async (userMessage: string) => {
    // Simulate fetching from an API
    const simulatedResponse = `Response to "${userMessage}"`;
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: simulatedResponse }]);
    }, 1000); // Simulated API delay
  };

  const handleOptionClick = (option: string) => {
    handleUserMessage(option);
    setShowOptions(false); // Hide options after selection
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Chatbot Button */}
      <motion.button
        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
        onClick={toggleChatbot}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        💬
      </motion.button>

      {/* Chatbot Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* Header */}
          <ChatbotHeader onClose={toggleChatbot} />

          {/* Messages */}
          <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.sender === 'bot' && (
                  <FaRobot className="text-blue-500 text-2xl" />
                )}
                <div
                  className={`px-4 py-2 rounded-lg max-w-xs text-sm shadow-lg ${
                    message.sender === 'bot'
                      ? 'bg-blue-100 text-gray-800'
                      : 'bg-green-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
                {message.sender === 'user' && (
                  <FaUserCircle className="text-green-500 text-2xl" />
                )}
              </div>
            ))}
          </div>

          {/* Initial Chat Options */}
          {showOptions && (
            <div className="p-4 space-y-2 border-t bg-gray-50">
              <button
                onClick={() => handleOptionClick('Looking for my package')}
                className="w-full py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:scale-105 transition-transform"
              >
                Looking for my package
              </button>
              <button
                onClick={() => handleOptionClick('Track my order')}
                className="w-full py-2 text-blue-600 border border-blue-500 rounded-lg hover:bg-blue-100 transition"
              >
                Track my order 🚚
              </button>
              <button
                onClick={() => handleOptionClick('How do I track my order (FAQ)?')}
                className="w-full py-2 text-blue-600 border border-blue-500 rounded-lg hover:bg-blue-100 transition"
              >
                How do I track my order (FAQ)?
              </button>
            </div>
          )}

          {/* Input Area */}
          <div className="flex items-center px-4 py-3 border-t bg-gray-50">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-grow border rounded-full px-2 py-2 text-sm focus:outline-none"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleUserMessage(inputMessage);
                }
              }}
            />
            <div className="flex space-x-2 ml-2">
              <ChatbotButton type="emoji" onClick={() => alert('Emoji Picker Coming Soon!')} />
              <ChatbotButton type="pdf" onClick={() => alert('PDF Upload Coming Soon!')} />
              <ChatbotButton type="send" onClick={() => handleUserMessage(inputMessage)} />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;
