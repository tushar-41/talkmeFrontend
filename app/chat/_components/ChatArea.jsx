"use client";
import { MoreVertical, Send } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ChatArea = ({ selectedUser }) => {
  const chatUser = Object.fromEntries(selectedUser);

  return (
    <div className="md:col-span-6">
      <div className="h-auto w-full flex py-4 px-2 justify-between">
        <div className="flex gap-2">
          <Image
            src={chatUser.image}
            className="size-10 rounded-full"
            width={30}
            height={30}
            alt="I"
          />
          <div className="relative">
            <h1 className="text-xl text-white font-normal">{chatUser.name}</h1>
            <span
              className={`${chatUser.online ? "text-green-600" : "text-red-600"} text-xs absolute inset-x-0 top-6`}
            >
              {chatUser.online ? "Online" : "Offline"}
            </span>
          </div>
        </div>
        <div className="relative group">
          <div>
            <MoreVertical />
          </div>
          <div className="absolute right-2 h-auto w-25 px-1 border border-neutral-400 rounded-md hidden group-hover:block">
            <h1 className="font-normal text-white/80 text-[20px] px-2 hover:text-white/50 hover:cursor-pointer">
              Profile
            </h1>
            <hr className="text-neutral-400" />
            <button className="text-white/80 text-[20px] px-2 hover:text-white/50 hover:cursor-pointer">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
