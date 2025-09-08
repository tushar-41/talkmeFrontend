'use client';

import React, { useContext, useState } from 'react'
import { createContext } from 'react';

const userContext = createContext();

function userProvider({children}){
  const [userDetail,setUserDetail] = useState('');

  const currentUser = (userId) => {
    setUserDetail(userId);
  }
  
  return(
    <userContext.Provider value={{userDetail,currentUser}}>
      {children}
    </userContext.Provider>
  );
}

export default userProvider;