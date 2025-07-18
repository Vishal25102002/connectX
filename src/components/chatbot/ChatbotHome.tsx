// src/components/chatbot/ChatbotHome.tsx
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ChatbotHomeProps {
  onPreloadedMessageClick: (message: string) => void;
  setActiveTab: (tab: 'home' | 'chat') => void;
}

const ChatbotHome: React.FC<ChatbotHomeProps> = ({ setActiveTab }) => {
  const preloadedMessages = [
    { text: "Terms and Conditions", action: () => window.open("https://www.lycamobile.us/en/termscondition/", "_blank") },
    { text: "Chat with Lia", action: () => { console.log("Navigating to chat..."); setActiveTab('chat'); } },
    { text: "FAQ", action: () => window.open("https://www.lycamobile.us/en/help/frequently-asked-question/", "_blank") },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <h2 className="text-4xl font-semibold text-black mb-4 text-center">
        Hi, I'm Lia 👋
      </h2>
      <p className="text-lg text-gray-700 mb-8 text-center">
        How can we assist you today?
      </p>
      <div className="w-full space-y-3">
        {preloadedMessages.map((msg, index) => (
          <button
            key={index}
            onClick={() => {
              console.log(`Button Clicked: ${msg.text}`); // Debugging log
              msg.action();
            }}
            className="w-full px-4 py-3 border border-blue-300 rounded-lg transition hover:bg-blue-50 hover:shadow-lg focus:outline-none text-left"
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-800 font-medium">{msg.text}</span>
              <ExternalLink size={20} className="text-blue-500" />
            </div>
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          console.log("Navigating to Contact Support...");
          window.open("https://www.lycamobile.us/en/help/contact-us/?srsltid=AfmBOoq4XdVFkgeXLK1zuvUIGvA3vZCqDIs8X2umdTM4ZT8M9LGwLdpq", "_blank");
        }}
        className="mt-4 w-full px-4 py-3 bg-blue-600 text-white rounded-lg transition hover:bg-blue-700 hover:shadow-lg focus:outline-none"
      >
        Contact Support
      </button>
    </div>
  );
};

export default ChatbotHome;
