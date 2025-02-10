// src/App.tsx
import React from 'react';
import Home from './components/Home';
import Chatbot from './components/chatbot/Chatbot';

const App: React.FC = () => {
  return (
    <div className="App">
      <Home />
      <Chatbot />
    </div>
  );
};

export default App;
