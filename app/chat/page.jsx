"use client";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import SelectedUser from "./_components/SeletedUser";

const ChatPage = () => {
  const dummyUser = [
    { name: "Tushar Sharma", status: "online", id: 1 },
    { name: "Lakshay", status: "offline", id: 2 },
    { name: "Raghav", status: "online", id: 3 },
    { name: "Bhavish", status: "online", id: 4 },
    { name: "Shashwat", status: "offline", id: 5 },
    { name: "Shukla", status: "online", id: 6 },
  ];

  const [socket, setSocket] = useState(null);
  const [selectedUser, setSelectedUser] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [currentUser, setCurrentUser] = useState(dummyUser[0]);
  const [messages, setMessages] = useState([]);
  const [socketId, setSocketId] = useState(null);

  // ✅ Connect socket once when component mounts
  useEffect(() => {
    const newSocket = io("http://localhost:8080", {
      transports: ["websocket"], // ensures proper connection
    });
    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("Connected to server ✅");
    });

    newSocket.on("socketid", (id) => {
      console.log("Received socket ID from server:", id);
      setSocketId(id);
      newSocket.emit("ack", id);
    });

    // Cleanup on unmount
    return () => {
      newSocket.disconnect();
      console.log("Socket disconnected ❌");
    };
  }, []);

  const handleInputChange = (e) => {
    setMessageInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;
    setMessages((prev) => [...prev, messageInput]);
    setMessageInput("");

    // optional: emit to backend
    socket?.emit("message", {
      from: currentUser.name,
      to: selectedUser,
      text: messageInput,
    });
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-t from-blue-400 to-[#10172a] h-screen">
      <div className="h-175 w-250 bg-white/20 backdrop-blur-3xl rounded-3xl border border-none p-3 flex">
        {/* Sidebar */}
        <div className="h-full w-50 bg-blue-300/50 rounded-l-md flex flex-col items-center">
          <h2 className="text-3xl text-center mt-3 font-bold font-mono">
            Users
          </h2>
          <input
            placeholder="Search user..."
            className="mt-2 border-2 hover:border-blue-700 w-40 p-1 rounded-3xl mb-2 text-center placeholder-black"
            value={messageInput}
            onChange={handleInputChange}
          />
          <div className="flex flex-col gap-5 w-40">
            {dummyUser
              .filter((user) => user.id !== currentUser.id)
              .map((user) => (
                <div
                  key={user.id}
                  className="border-2 border-gray-500 rounded-md w-full hover:cursor-pointer pl-1 pt-1"
                  onClick={() => setSelectedUser(user.name)}
                >
                  <div className="text-2xl">
                    {user.name}
                    <p
                      className={`text-xs font-mono ${
                        user.status === "online"
                          ? "text-blue-900"
                          : "text-red-500"
                      }`}
                    >
                      {user.status}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Chat Area */}
        {selectedUser ? (
          <div className="p-1 h-full w-150 bg-blue-300/50 rounded-r-md flex flex-col">
            <div className="h-full w-full border-2 border-black rounded-2xl flex flex-col">
              <div className="flex-1 overflow-y-auto p-3">
                {messages.map((msg, index) => (
                  <div key={index} className="text-black">
                    {msg}
                  </div>
                ))}
              </div>
              <div className="p-2 border-t flex gap-2">
                <input
                  value={messageInput}
                  onChange={handleInputChange}
                  className="flex-1 border rounded px-2"
                  placeholder="Type a message..."
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-700 text-white px-3 py-1 rounded"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full w-150 bg-blue-300/50 flex items-center justify-center font-mono text-5xl font-bold rounded-r-md">
            Please select a user to chat with...
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
