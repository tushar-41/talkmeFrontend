'use client';

import Navbar from "@/components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import {io} from 'socket.io-client';

export default function Home() {

  const [data,setData] = useState('');

  useEffect(() => {
    
  } ,[]);


  return (
    <>
       <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage:"url('/chat.webp')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-400 tracking-tighter text-4xl text-transparent bg-clip-text font-bold text-center mt-40">Welcome to Talkme</div>
        <div className="flex items-center justify-center fixed left-0 right-0 top-0 pt-10">
          <div className='bg-black/20 backdrop-blur-md h-12 w-1/2 rounded-4xl p-3 overflow-hidden'>
          <h1 className='font-bold font-mono text-white'>
           Talk Me
          </h1>
          </div>  
        </div>
       </div>
       <section className="h-100 w-full bg-amber-700">
              <div className="text-center">
                <h1 className="text-2xl">Section 1 about the how to use</h1>
              </div>
          </section>
          <section className="h-100 w-full bg-teal-700">
              <div className="text-center">
                <h1 className="text-2xl">Section 2 Features</h1>
              </div>
          </section>
    </>
  );
}