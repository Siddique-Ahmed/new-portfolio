"use client";
import React from "react";

const LoginForm = () => {
  return (
    <form className="w-full sm:w-[310px] flex flex-col gap-5 bg-white px-3 py-5 items-center shadow-lg rounded-md">
      <h1 className="font-bold text-2xl">Admin Login</h1>
      <input className="bg-gray-100 focus:bg-slate-50 w-full p-2 outline-none rounded-md" type="text" placeholder="email" />
      <input className="bg-gray-100 focus:bg-slate-50 w-full p-2 outline-none rounded-md" type="text" placeholder="password" />
      <button className="w-full bg-black text-white px-4 py-2 rounded-md font-bold hover:bg-black/90" type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
