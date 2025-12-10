import React from "react";

const ChatLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[url('/chat2.webp')] bg-cover bg-center bg-no-repeat">
      {children}
    </div>
  );
};

export default ChatLayout;
