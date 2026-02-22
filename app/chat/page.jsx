"use client";
import React, { useState } from "react";
import ProfilePage from "./_components/ProfilePage";
import UserProfile from "./_components/UserProfile";
import dynamic from "next/dynamic";

const DynamicChatArea = dynamic(() => import("./_components/ChatArea"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse text-4xl text-black/20 font-mono col-span-6 flex items-center justify-center">
      Loading ...
    </div>
  ),
});

const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="h-screen w-full border sm:px-[15%] py-[5%] bg-[url('/chat2.webp')]">
      <div
        className={`h-[100%] backdrop-blur-2xl border rounded-sm border-gray-600 grid grid-cols-1 md:grid-cols-12 
        `}
      >
        <div className="md:col-span-3">
          <ProfilePage setSelectedUser={setSelectedUser} />
        </div>

        {selectedUser ? (
          <DynamicChatArea selectedUser={selectedUser} />
        ) : (
          <div className="md:col-span-9 flex items-center justify-center text-5xl tracking-wide font-bold text-black/50">
            Select a Chat
          </div>
        )}

        {selectedUser && (
          <div className="bg-white/20 h-full w-full md:col-span-3 flex items-center justify-center">
            <UserProfile />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
