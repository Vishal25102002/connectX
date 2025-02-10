// src/components/chatbot/Chatbot.tsx
import React, { useState } from 'react';
import axios from 'axios';
import ChatbotHeader from './ChatbotHeader';
import ChatbotHome from './ChatbotHome';
import ChatbotInput from './ChatbotInput';
import MessageList from './MessageList';
import ChatbotLoader from './ChatbotLoader';
import ChatbotNav from './ChatbotNav';
import ChatbotButton from './ChatbotButton';

export interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'home' | 'chat'>('home');

  // Allow event to be optional so we can toggle programmatically if needed
  const toggleChatbot = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleSendMessage = async (message: string) => {
    setActiveTab('chat');

    const userMessage: Message = { id: Date.now(), text: message, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await axios.post(
        '/api/chat/',
  { query: message },
  { headers: { 'Content-Type': 'application/json' } });
      const botText = response.data.response?.content || "Sorry, I didn't understand that.";
      const botMessage: Message = { id: Date.now() + 1, text: botText, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Error processing your request.",
        sender: 'bot',
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
            fixed bottom-16 right-4 sm:right-6 md:right-8 lg:right-10
            w-80 md:w-96
            bg-white border border-gray-300 rounded-xl shadow-xl
            flex flex-col h-[70vh] sm:h-[600px] z-50 overflow-hidden
          "
        >
          <ChatbotHeader onClose={toggleChatbot} />
          <div className="flex flex-col flex-1 overflow-hidden">
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {activeTab === 'home' ? (
                <ChatbotHome onPreloadedMessageClick={handleSendMessage} />
              ) : (
                <>
                  {messages.length === 0 ? (
                    <div className="text-center text-gray-500">
                      No messages yet. Start chatting!
                    </div>
                  ) : (
                    <MessageList messages={messages} />
                  )}
                  {isLoading && <ChatbotLoader />}
                </>
              )}
            </div>
            <div className="sticky bottom-0 bg-white border-t">
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
