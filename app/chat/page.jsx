'use client';
import { Chatbox } from '@/components/Chatbox';
import React, { useState } from 'react'

const ChatPage = () => {

    const dummyUser = [
        {name:'tushar sharma',status:'online',id:1},
        {name:'Lakshay',status:'offline',id:2},
        {name:'Raghav',status:'online',id:3},
        {name:'Bhavish',status:'online',id:4},
        {name:'Shashwat',status:'offline',id:5},
        {name:'Shukla',status:'online',id:6},
    ]

    const [selectedUser,setSelectedUser] = useState(null);
    const [messageInput,setMessageInput] = useState('');
    const [currentUser,setCurrentUser] = useState(dummyUser[0]); //Tushar sharma
    const [messages,setMessages] = useState([]);

    const handleInputchange = ((e) => {
       const inputUser =  dummyUser.filter((u) => u.id === e.value.id);

    })


  return (
    <div className='flex items-center justify-center bg-gradient-to-t from-blue-400 to-[#10172a] h-screen'>
        <div className='h-175 w-250 bg-white/20 backdrop-blur-3xl rounded-3xl border border-none p-3 flex'>
            <div className='h-full w-50 bg-blue-300/50 rounded-l-md flex flex-col items-center'>
               {/* Chatbox component */}
                <h2 className='text-3xl text-center mr-2 mt-3 font-bold font-mono'>Users</h2>
                <input placeholder='Search user...' autoFocus className='mt-2 border-2 w-40 p-1 rounded-3xl mb-2 text-center placeholder-black' onChange={(e) => handleInputchange(e.target)}/>
                <div className='flex flex-col gap-5 w-40'>
                   {dummyUser.filter((user) => user.id !== currentUser.id).map((user) => (
                    <div className='border-2 border-gray-500 rounded-md w-full hover:cursor-pointer pl-1 pt-1' key={user.id} onClick={() => setSelectedUser(user)}>
                        <div className='text-2xl'>{user.name}
                            <p className={`text-xs font-mono ${user.status === 'online' ? 'text-blue-900' : 'text-red-500' }`}>{user.status}</p>
                        </div>
                    </div>
                   ))} 
                </div>
            </div>
            {selectedUser ? (
            <div className='h-full w-150 bg-blue-300/50 rounded-r-md'>
                user mesagessss
            </div>) 
            :
            (<div className='h-full w-150 bg-blue-300/50 flex items-center justify-center font-mono text-5xl font-bold rounded-r-md'>
            Please select a user to chat with...
            </div>
        )}
        </div>
    </div>
  )
}

export default ChatPage;
