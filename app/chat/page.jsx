"use client";
import React, { useState } from "react";
import ProfilePage from "./_components/ProfilePage";
import SideBar from "./_components/SideBar";
import dynamic from "next/dynamic";

const DynamicChatArea = dynamic(() => import("./_components/ChatArea"), {
  ssr: false,
});

const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState(false);

  return (
    <div className="h-screen w-full border sm:px-[15%] py-[5%] bg-[url('/chat2.webp')]">
      <div
        className={`h-[100%] backdrop-blur-2xl border rounded-sm border-gray-600 grid grid-cols-2 md:grid-cols-3 
          ${selectedUser ? "grid-cols-3" : "grid-cols-2"}`}
      >
        <div>
          <ProfilePage />
        </div>

        <div className="w-full h-full bg-white">
          <SideBar />
        </div>
        {selectedUser ? (
          <DynamicChatArea selectedUser={"tushar"} />
        ) : (
          <div> please select user to chat with</div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
