"use client";

import { useRouter } from "next/navigation";

export default function Sidebar({ username }) {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("username"); // Clear user data
    router.push("/login"); // Redirect to login page
  };

  return (
    <div className="p-6 bg-gray-900 text-white h-screen flex flex-col items-center shadow-xl w-60">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-xl font-bold">
          {username ? username[0].toUpperCase() : "G"}
        </div>
        <h1 className="text-lg font-semibold mt-2">{username || "Guest"}</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col w-full space-y-4">
        <button className="w-full text-left px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 hover:text-green-400 transition">
          🏠 Home
        </button>
        <button className="w-full text-left px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 hover:text-green-400 transition">
          💬 Chats
        </button>
        <button className="w-full text-left px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 hover:text-green-400 transition">
          ⚙️ Settings
        </button>
        <button
        onClick={handleLogout}
        className="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-all duration-300"
      >
        Logout
      </button>
      </nav>

      {/* Footer */}
      <div className="mt-auto text-gray-500 text-sm">
        <p>© 2025 ChatApp</p>
      </div>
    </div>
  );
}
