"use client";
import { Home, Send } from "lucide-react";
import React, { useState } from "react";

const SelectedUser = ({ selectedUser }) => {
  return (
    <div className="flex justify-center items-center h-[100%]">
      <p>{selectedUser}</p>
    </div>
  );
};

export default SelectedUser;
