'use client';

import Navbar from "@/components/Navbar";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import {io} from 'socket.io-client';

export default function Home() {

  const [data,setData] = useState('');


  useEffect(() => {
    
  } ,[]);


  return (
    <div>
       <div className="min-h-screen bg-gradient-to-t from-blue-400 to-[#10172a] h-screen">
        <div className="flex items-center justify-center fixed left-0 right-0 top-0 mt-10">
          <div className='bg-black/20 backdrop-blur-md h-12 w-1/2 rounded-4xl p-3 overflow-hidden'>
            <h1 className='font-bold font-mono text-white'>
             Talk Me
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="font-mono bg-gradient-to-r from-red-700 to-teal-400 tracking-tighter text-7xl text-transparent bg-clip-text font-bold text-center mt-40">Welcome to Talkme</div>
          <p className="text-2xl text-muted-foreground text-black/80 p-10 w-200 text-center font-bold font-mono"> This website provide you the ability to chat with your friends in private space and with full privacy.</p>
        </div>
        <div className="pt-10 flex items-center justify-center gap-20">
          <button className="text-2xl border-none rounded-lg bg-gray-600 px-4 py-2 hover:bg-white/10 hover:cursor-pointer hover:scale-110 hover:text-black transition-all duration-300">Get started</button>
          <Link href='#how it works'>
          <button className="text-2xl border-none rounded-lg bg-gray-600 px-4 py-2 hover:bg-white/10 hover:cursor-pointer hover:scale-110 hover:text-black transition-all duration-300">See how it works</button>
          </Link>
        </div>
       </div>
       <section className="min-h-screen w-full bg-amber-700" id="how it works">
              <div className="text-center">
                <h1 className="text-2xl">How it works</h1>
              </div>
          </section>
          <section className="min-h-screen w-full bg-teal-700">
              <div className="text-center">
                <h1 className="text-2xl">Testimonials</h1>
              </div>
          </section>
    </div>
  );
}