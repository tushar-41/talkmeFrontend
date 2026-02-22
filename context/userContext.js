"use client";

import { io } from "socket.io-client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

const backendUrl = "http://localhost:8081";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [userDetail, setUserDetail] = useState("");
  const [socketId, setSocketId] = useState(null);

  const currentUser = (userId) => {
    setUserDetail(userId);
  };

  // const socket = io(backendUrl, {
  //   autoConnect: false,
  //   auth: {
  //     userId: localStorage.getItem("userId"),
  //   },
  // });

  // useEffect(() => {
  //   socket.connect();

  //   return () => socket.disconnect();
  // }, []);

  //getting user for sidebar

  return (
    <UserContext.Provider value={{ userDetail, currentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
