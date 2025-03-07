"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!username.trim()) return alert("Please enter your name");

    localStorage.setItem("username", username);
    router.push("/"); // Redirect to chat page
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Glassmorphic Card */}
      <div className="backdrop-blur-lg bg-gray-900/70 border border-gray-700 p-8 rounded-2xl shadow-2xl w-96 text-white">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-200">
          Welcome Back! 👋
        </h1>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-lg text-white font-bold text-lg tracking-wide transition-all hover:scale-105 hover:shadow-green-500/50"
        >
          Start Chatting 🚀
        </button>
      </div>
    </div>
  );
}
