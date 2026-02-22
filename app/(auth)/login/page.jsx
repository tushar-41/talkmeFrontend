"use client";
import { UserContext } from "@/context/userContext";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useRef, useState } from "react";
import { toast } from "sonner";

const LoginPage = () => {
  const { currentUser } = useContext(UserContext);

  const inputRef = useRef(null);
  const emailRef = useRef(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        "http://localhost:8080/api/auth/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data) {
        localStorage.setItem("token", data.data.token);
        currentUser(data.data.user);
        localStorage.setItem("userId", data.data.user._id);
        router.push("/chat");
        toast.success(`Welcome ${data.data.user.name}`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error at Login");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="absolute right-30 h-120 w-[25%] border rounded-2xl bg-white/20 backdrop-blur-2xl flex flex-col items-center gap-15">
      <h1
        className="text-2xl tracking-tighter font-bold bg-black
             text-transparent bg-clip-text mt-6"
      >
        Hello Cutie Login please
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        <label
          htmlFor="email"
          className="text-xl font-semibold pr-10 mb-2"
          onClick={() => inputRef.current.focus()}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="text-white text-sm font-mono p-2 rounded-sm border border-white mb-4 outline-none focus:ring focus:ring-white"
          value={formData.email}
          onChange={handleChange}
          ref={inputRef}
          autoFocus
        />
        <label
          htmlFor="password"
          className="text-xl font-semibold pr-10 mb-2"
          onClick={() => emailRef.current.focus()}
        >
          Password
        </label>
        <input
          type="text"
          id="password"
          name="password"
          className="text-white text-sm font-mono p-2 rounded-sm border border-white mb-4 outline-none focus:ring focus:ring-white"
          value={formData.password}
          onChange={handleChange}
          ref={emailRef}
        />
        <button
          type="submit"
          className="text-3xl font-mono bg-purple-500 hover:bg-white hover:text-black px-6 py-2 rounded-2xl transition-all duration-300"
        >
          Submit
        </button>
      </form>
      <p className="mt-3 text-sm font-sans text-white">
        Did not have account ?
        <span className="text-pink-600 ml-2">
          <Link href={"/signup"}>Signup Please</Link>
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
