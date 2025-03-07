"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!username.trim()) return alert("Please enter your name");

    localStorage.setItem("username", username); // Store username
    router.push("/"); // Redirect to home (chat page)
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-2 border rounded-md mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
        >
          Start Chatting
        </button>
      </div>
    </div>
  );
}
