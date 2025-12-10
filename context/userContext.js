"use client";

import { socket } from "@/libs/socket";
import React, { useContext, useState } from "react";
import { createContext } from "react";
import { Socket } from "socket.io-client";

const UserContext = createContext();

function UserProvider({ children }) {
  const [userDetail, setUserDetail] = useState("");
  const [socketId, setSocketId] = useState(null);

  const currentUser = (userId) => {
    setUserDetail(userId);
  };

  //getting user for sidebar

  return (
    <UserContext.Provider value={{ userDetail, currentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
