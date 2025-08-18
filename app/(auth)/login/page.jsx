'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useRef, useState } from 'react'

const LoginPage = () => {

    const inputRef = useRef(null);
    const emailRef = useRef(null);
    const [formData,setFormData] = useState({
        name:'Default',
        email:'Default',
    });

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const data = await axios.post('http://localhost:8080',{formData});

            if(!data){
                return new Error('Connection to the backend failed');
            }
        } catch (error) {
            return new Error('Submitting form failed' + error.message);
        }
    }

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData(prev=> ({
            ...prev,
           [name]:value,
        }));
    }

  return (
    <div className='min-h-screen bg-gradient-to-b from-purple-700 to-red-400 flex justify-center items-center'>
        <div className='h-120 w-100 border rounded-2xl bg-black shadow-2xl shadow-white flex flex-col items-center gap-15'>
            <h1 className='text-2xl tracking-tighter font-bold bg-gradient-to-r from-blue-700 to-gray-500
             text-transparent bg-clip-text mt-6'>
                Hello Cutie Login please</h1>
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
                <label htmlFor='name' className='text-xl font-semibold pr-10 mb-2' onClick={() => inputRef.current.focus()}>What's ur name?</label>
                <input type="text" id='name' name='name' className='text-white text-sm font-mono p-2 rounded-2xl border-none mb-4' 
                value={formData.name} onChange={handleChange} ref={inputRef} autoFocus/>
                <label htmlFor='email' className='text-xl font-semibold pr-10 mb-2' onClick={() => emailRef.current.focus()}>What's ur email?</label>
                <input type="text" id='name' name='email' className='text-white text-sm font-mono p-2 rounded-2xl border-none mb-4' 
                value={formData.email} onChange={handleChange} ref={emailRef}/>
                <button type='submit' className='text-3xl font-mono bg-purple-500 hover:bg-white hover:text-black px-6 py-2 rounded-2xl transition-all duration-300'>Submit</button>
            </form>
            <p className='mt-3 text-sm font-sans text-white'>
                Did not have account ?
                <span className='text-pink-600 ml-2'>
                <Link href={'/signup'}>
                Signup Please
                </Link>
                </span>
            </p>
            <p>
                Alter link
            </p>
        </div>
    </div>
  )
}

export default LoginPage;