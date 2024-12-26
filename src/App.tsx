import React from 'react';
import Chatbot from './components/Chatbot';
import Home from "./components/Home"
const App: React.FC = () => {
  return (
     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col items-center justify-center">
      <Home />
      <Chatbot />
    </div>
  );
};

export default App;