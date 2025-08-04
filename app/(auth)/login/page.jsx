'use client';
import React, { useRef, useState } from 'react'

const LoginPage = () => {

    const [inputField,setInputField] = useState('');
    const inputRef = useRef(null);
    const [emailField,setEmailField] = useState('');
    const emailRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }

  return (
    <div className='min-h-screen bg-gradient-to-b from-purple-700 to-red-400 flex justify-center items-center'>
        <div className='h-120 w-100 border rounded-2xl bg-black shadow-2xl shadow-white flex flex-col items-center gap-15'>
            <h1 className='text-2xl tracking-tighter font-bold bg-gradient-to-r from-blue-700 to-gray-500
             text-transparent bg-clip-text mt-6'>
                Hello Cutie Login please</h1>
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
                <label htmlFor='name' className='text-xl font-semibold pr-10 mb-2' onClick={() => inputRef.current.focus()}>What's ur name?</label>
                <input type="text" id='name' className='text-white text-sm font-mono p-2 rounded-2xl border-none mb-4' 
                value={inputField} onChange={(e) => setInputField(e.target.value)} ref={inputRef} autoFocus/>
                <label htmlFor='email' className='text-xl font-semibold pr-10 mb-2' onClick={() => emailRef.current.focus()}>What's ur email?</label>
                <input type="text" id='name' className='text-white text-sm font-mono p-2 rounded-2xl border-none mb-4' 
                value={emailField} onChange={(e) => setEmailField(e.target.value)} ref={emailRef}/>
                <button type='submit' className='text-3xl font-mono bg-purple-500 hover:bg-white hover:text-black px-6 py-2 rounded-2xl transition-all duration-300'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage