'use client';
import { Home, Send } from 'lucide-react';
import React, { useState } from 'react';

const SelectedUser = ({ selectedUser }) => {
  const [messages, setMessages] = useState([
    { sender: 'them', text: 'Hey, how are you?' },
    { sender: 'me', text: 'I’m good! Working on a project.' },
  ]);
  const [inputValue, setInputValue] = useState('');

  // 🔹 Dummy status (random for now, can be tied to user later)
  const isOnline = Math.random() > 0.5; // randomly online/offline

  const handleSend = () => {
    if (inputValue.trim() === '') return;
    setMessages([...messages, { sender: 'me', text: inputValue }]);
    setInputValue('');
  };

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <div className="flex items-center justify-between bg-blue-500/80 p-4 rounded-t-xl shadow-md">
        <div className="flex items-center space-x-2">
          <span className="relative flex h-3 w-3">
            <span
              className={`absolute inline-flex h-full w-full rounded-full ${
                isOnline ? 'bg-green-500' : 'bg-red-500'
              }`}
            ></span>
          </span>
          <p className="text-lg text-white font-semibold">
            {selectedUser?.name || selectedUser}
          </p>
          <span
            className={`text-xs font-medium ml-2 ${
              isOnline ? 'text-green-200' : 'text-red-200'
            }`}
          >
            {isOnline ? 'Online' : 'Offline'}
          </span>
        </div>

        <div className="flex items-center space-x-2 hover:cursor-pointer text-white/80 hover:text-white">
          <Home className="h-5 w-5" />
          <span className="text-sm">Home</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-white/10 backdrop-blur-md p-4 overflow-y-auto space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[70%] p-3 rounded-2xl text-sm ${
              msg.sender === 'me'
                ? 'ml-auto bg-blue-600 text-white rounded-br-none'
                : 'mr-auto bg-gray-200 text-gray-800 rounded-bl-none'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex items-center gap-2 p-3 bg-blue-500/80 rounded-b-xl">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-xl outline-none text-black"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default SelectedUser;
