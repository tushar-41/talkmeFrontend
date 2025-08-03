'use client';

import Navbar from "@/components/Navbar";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import {io} from 'socket.io-client';

export default function Home() {

  let isLogin = true;
  const [data,setData] = useState('');


  useEffect(() => {
  } ,[]);


  return (
    <div>
       <div className="min-h-screen bg-gradient-to-t from-blue-400 to-[#10172a] h-screen">
        <div className="flex items-center justify-center fixed left-0 right-0 top-0 mt-10 z-100">
          <div className='bg-black/20 backdrop-blur-md h-12 w-1/2 rounded-4xl p-3 overflow-hidden'>
            <h1 className='font-bold font-mono text-white'>
             Talk Me
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="font-mono bg-gradient-to-r from-red-700 to-teal-400 tracking-tighter text-7xl text-transparent bg-clip-text font-bold text-center mt-40">Welcome to Talkme</div>
          <p className="text-2xl text-muted-foreground text-black/80 p-10 w-200 text-center font-bold font-mono">Talkme provide you the ability to chat with your friends in private space and with full privacy.</p>
        </div>
        <div className="flex items-center justify-center gap-20">
         <div className="relative inline-block rounded-xl p-[2px] overflow-hidden">
          <div className="absolute inset-0 rounded-xl bg-[conic-gradient(red,orange,yellow,green,blue,indigo,violet,red)] animate-spin-slow z-0" />
            <Link href={!isLogin ? '/chat' : '/login'}>
            <button className="relative z-10 px-6 py-2 bg-black text-white rounded-xl hover:bg-white hover:text-black hover:cursor-pointer transition-all duration-300">
              Get started
            </button>
            </Link>
          </div>
          <div className="relative inline-block rounded-xl p-[2px] overflow-hidden">
          <div className="absolute inset-0 rounded-xl bg-[conic-gradient(red,orange,yellow,green,blue,indigo,violet,red)] animate-spin-slow z-0" />
            <Link href={'#'}>
            <button className="relative z-10 px-6 py-2 bg-black text-white rounded-xl hover:bg-white hover:text-black hover:cursor-pointer transition-all duration-300">
              How it's works
            </button>
            </Link>
          </div>
        </div>
       </div>
    </div>
  );
}