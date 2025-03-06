"use client";

import { useState } from "react";

const dummyChats = [
  { id: 1, user: "Alice", message: "Hey there!", time: "10:00 AM" },
  { id: 2, user: "Bob", message: "Hello! How are you?", time: "10:05 AM" },
  { id: 3, user: "Alice", message: "I'm good, thanks!", time: "10:07 AM" },
];

export default function ChatApp() {
  const [messages, setMessages] = useState(dummyChats);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    const newChat = {
      id: messages.length + 1,
      user: "You",
      message: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([...messages, newChat]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4 max-w-md mx-auto shadow-lg rounded-lg">
      <div className="flex-grow overflow-auto bg-white p-4 rounded-lg">
        {messages.map((chat) => (
          <div key={chat.id} className={`mb-2 p-2 rounded-lg ${chat.user === "You" ? "bg-green-200 ml-auto" : "bg-gray-200"}` }>
            <p className="text-sm font-semibold">{chat.user}</p>
            <p>{chat.message}</p>
            <p className="text-xs text-gray-500 text-right">{chat.time}</p>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          className="flex-grow p-2 border rounded-lg focus:outline-none text-black"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage} className="ml-2 p-2 bg-blue-500 text-white rounded-lg">Send</button>
      </div>
    </div>
  );
}
