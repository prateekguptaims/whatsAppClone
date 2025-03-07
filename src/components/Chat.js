"use client";

import { useState, useEffect, useRef } from "react";
import { FaRegSmile, FaPaperPlane } from "react-icons/fa";
import Image from "next/image";

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, user: "Bot", message: "Hello! How can I help you?", time: "10:00 AM", seen: true },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [typing, setTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getBotResponse = (userMessage) => {
    const responses = {
      hi: "Hey! 😊",
      hello: "Hi there! 👋",
      "how are you?": "I'm good, what about you? 🤖",
      "what is your name?": "I am a chatbot! 🤖",
      bye: "Goodbye! Have a great day! 👋",
    };

    return responses[userMessage.toLowerCase()] || "I don't understand that. 🤔";
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const userChat = { id: messages.length + 1, user: "You", message: newMessage, time, seen: false };

    setMessages([...messages, userChat]);
    setNewMessage("");
    setTyping(true);

    setTimeout(() => {
      const botReply = { id: messages.length + 2, user: "Bot", message: getBotResponse(newMessage), time, seen: true };
      setMessages((prev) => [...prev, botReply]);
      setTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen max-w-lg mx-auto bg-gray-900 text-white shadow-2xl rounded-xl border border-gray-800 overflow-hidden">
      {/* Chat Header */}
      <div className="bg-gray-800 p-4 flex items-center shadow-md">
        {/* <Image
          src="/bot-avatar.png"
          width={40}
          height={40}
          className="rounded-full border-2 border-green-400"
          alt="Bot"
        /> */}
        <h1 className="text-lg font-bold ml-3 text-gray-200">Chat App</h1>
      </div>

      {/* Chat Messages */}
      <div className="flex-grow overflow-auto p-4 bg-gray-850 custom-scrollbar">
        {messages.map((chat) => (
          <div
            key={chat.id}
            className={`mb-3 p-3 max-w-xs rounded-xl shadow-md text-sm ${
              chat.user === "You"
                ? "ml-auto bg-green-600 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            <p className="font-semibold">{chat.user}</p>
            <p className="mt-1">{chat.message}</p>
            <p className="text-xs text-gray-400 text-right mt-1">
              {chat.time} {chat.user === "You" && (chat.seen ? "✅✅" : "✅")}
            </p>
          </div>
        ))}
        {typing && (
          <div className="mb-3 p-3 max-w-xs bg-gray-700 text-gray-300 rounded-xl shadow-md">
            <p className="font-semibold">Bot</p>
            <p className="mt-1 flex items-center">
              Typing<span className="animate-pulse">...</span>
            </p>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Chat Input */}
      <div className="flex items-center p-3 bg-gray-800 border-t border-gray-700">
        <FaRegSmile className="text-gray-500 text-xl cursor-pointer mx-2 hover:text-green-400 transition-colors" />
        <input
          type="text"
          className="flex-grow p-3 border border-gray-700 rounded-full bg-gray-850 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-2 p-3 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-all"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}
