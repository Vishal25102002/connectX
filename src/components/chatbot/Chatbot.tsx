// src/components/chatbot/Chatbot.tsx
import React, { useState } from 'react';
import axios from 'axios';
import ChatbotHeader from './ChatbotHeader';
import ChatbotHome from './ChatbotHome';
import ChatbotInput from './ChatbotInput';
import MessageList from './MessageList';
import ChatbotNav from './ChatbotNav';
import ChatbotButton from './ChatbotButton';
import ChatbotLoader from './ChatbotLoader'; // Import the loader component
import "../../App.css"

export interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'home' | 'chat'>('home');

  // Toggle the chatbot open/closed
  const toggleChatbot = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleResetChat = () => {
    setMessages([]);
    setActiveTab('home');
  };

  const handleSendMessage = async (message: string) => {
    setActiveTab('chat');

    // Add user message to state
    const userMessage: Message = { 
      id: Date.now(), 
      text: message, 
      sender: 'user', 
      timestamp: new Date() 
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // IMPORTANT: Must match FastAPI's expected key: "question"
      const response = await axios.post(
        "http://127.0.0.1:5000/ask",
        { question: message },
        { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }
      );

      // The FastAPI endpoint returns { "answer": "some text" }
      const botText = response.data.answer || "Sorry, I didn't understand that.";

      const botMessage: Message = { 
        id: Date.now() + 1, 
        text: botText, 
        sender: 'bot', 
        timestamp: new Date() 
      };
      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      console.error(error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Error processing your request.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="
            fixed bottom-16 right-2 sm:right-4 md:right-6 lg:right-8
            w-[90vw] sm:w-80 md:w-96 lg:w-[400px] xl:w-[450px]
            bg-white/80 backdrop-blur-xl border border-blue-200 rounded-3xl shadow-2xl
            flex flex-col h-[70vh] sm:h-[600px] lg:h-[650px] z-50 overflow-hidden
          "
        >
          <ChatbotHeader onClose={toggleChatbot} onReset={handleResetChat} />
          <div className="flex flex-col flex-1 overflow-hidden">
            <div className="flex-1 p-4 sm:p-6 space-y-4 overflow-y-auto scrollbar-hidden">
              {activeTab === 'home' ? (
                <ChatbotHome 
                  onPreloadedMessageClick={handleSendMessage} 
                  setActiveTab={setActiveTab} 
                />
              ) : (
                <>
                  {messages.length === 0 ? (
                    <div className="text-center text-gray-500">
                      No messages yet. Start chatting!
                    </div>
                  ) : (
                    <MessageList messages={messages} />
                  )}
                  {isLoading && <ChatbotLoader />} {/* Use the loader component here */}
                </>
              )}
            </div>
            <div className="sticky bottom-0 bg-white/80 backdrop-blur-md border-t border-blue-200">
              {activeTab === 'chat' && <ChatbotInput onSendMessage={handleSendMessage} />}
              <ChatbotNav
                onHomeClick={() => setActiveTab('home')}
                onChatClick={() => setActiveTab('chat')}
                activeTab={activeTab}
              />
            </div>
          </div>
        </div>
      )}
      <ChatbotButton toggleChat={toggleChatbot} />
    </>
  );
};

export default Chatbot;
