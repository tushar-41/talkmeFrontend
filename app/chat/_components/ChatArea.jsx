"use client";
import { Home, Send } from "lucide-react";
import React, { useState } from "react";

const ChatArea = ({ selectedUser }) => {
  return (
    <div>
      <h1>ChatArea {selectedUser}</h1>
    </div>
  );
};

export default ChatArea;
