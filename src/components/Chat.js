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
      "hi": "Hey! 😊",
      "hello": "Hi there! 👋",
      "how are you?": "I'm good, what about you? 🤖",
      "what is your name?": "I am a chatbot! 🤖",
      "bye": "Goodbye! Have a great day! 👋",
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
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50 shadow-lg rounded-lg border border-gray-200 overflow-hidden">
      {/* Chat Header */}
      <div className="bg-green-600 text-white p-4 rounded-t-lg flex items-center shadow-sm">
        <Image src="/bot-avatar.png" width={40} height={40} className="rounded-full mr-3 border-2 border-white" alt="Bot" />
        <h1 className="text-lg font-bold">ChatBot</h1>
      </div>

      {/* Chat Messages */}
      <div className="flex-grow overflow-auto p-4 bg-gradient-to-b from-green-50 to-gray-100">
        {messages.map((chat) => (
          <div
            key={chat.id}
            className={`mb-3 p-3 rounded-xl max-w-xs shadow-sm ${
              chat.user === "You"
                ? "bg-green-500 ml-auto text-white"
                : "bg-white text-gray-800"
            } animate-fade-in`}
          >
            <p className="text-sm font-semibold">{chat.user}</p>
            <p className="text-base">{chat.message}</p>
            <p className="text-xs text-gray-300 text-right flex justify-end items-center">
              {chat.time} {chat.user === "You" && (chat.seen ? "✅✅" : "✅")}
            </p>
          </div>
        ))}
        {typing && (
          <div className="mb-3 p-3 rounded-xl max-w-xs bg-white shadow-sm animate-fade-in">
            <p className="text-sm font-semibold">Bot</p>
            <p className="text-gray-500 flex items-center">
              <span className="animate-typing-dots">Typing</span>
              <span className="animate-typing-dots delay-100">.</span>
              <span className="animate-typing-dots delay-200">.</span>
              <span className="animate-typing-dots delay-300">.</span>
            </p>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Chat Input */}
      <div className="flex items-center p-3 bg-gray-100 border-t rounded-b-lg">
        <FaRegSmile className="text-gray-500 text-xl cursor-pointer mx-2 hover:text-green-600 transition-colors" />
        <input
          type="text"
          className="flex-grow p-2 border rounded-full focus:outline-none px-4 text-sm bg-white text-black placeholder-gray-400 focus:ring-2 focus:ring-green-500 transition-all"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-2 p-2 bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-600 transition-colors"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}