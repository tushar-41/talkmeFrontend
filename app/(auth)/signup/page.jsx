'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const SignUpPage = () => {

  const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:'',
  });

  const router = useRouter();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const data = await axios.post('http://localhost:8080',formData,
        {headers:{"content-type" : "application/json"}}
      );
      if(!data){
        return new Error('Signup route has problem');
      }else{
        // save the response here from the backend
        console.log(data.data.token);
        const token = data.data.token;
        localStorage.setItem('token',token);
      }
      // router.push('/chat');
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData((prev) => ({
      ...prev ,
      [name]:value,
    }));
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-purple-700 to-red-400 flex justify-center items-center'>
      <div className='h-120 w-100 border rounded-2xl bg-black shadow-2xl shadow-white flex flex-col items-center gap-5'>
            <h1 className='text-2xl tracking-tighter font-bold bg-gradient-to-r from-blue-700 to-gray-500
             text-transparent bg-clip-text mt-6'>
                Hello Cutie Signup please</h1>
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
                <label htmlFor='name' className='text-xl font-semibold pr-10 mb-2'>Name</label>
                <input type="text" id='name' name='name' className='text-white text-sm font-mono p-2 rounded-2xl border border-white mb-4' 
                value={formData.name} onChange={handleChange} autoFocus required/>
                <label htmlFor='email' className='text-xl font-semibold pr-10 mb-2'>Email</label>
                <input type="text" id='name' name='email' className='text-white text-sm font-mono p-2 rounded-2xl border border-white mb-4' 
                value={formData.email} onChange={handleChange} required/>
                <label htmlFor='password' className='text-xl font-semibold pr-10 mb-2'>Password</label>
                <input type="password" id='name' name='password' className='text-white text-sm font-mono p-2 rounded-2xl border border-white mb-4' 
                value={formData.password} onChange={handleChange} required/>
                <button type='submit' className='text-3xl font-mono bg-purple-500 hover:bg-white hover:text-black px-6 py-2 rounded-2xl transition-all duration-300'>Submit</button>
            </form>
            <p className='mt-3 text-sm font-sans text-white'>
                Already have an account ?
                <span className='text-pink-600 ml-2'>
                <Link href={'/login'}>
                Go to login
                </Link>
                </span>
            </p>
        </div>
    </div>
  )
}

export default SignUpPage;