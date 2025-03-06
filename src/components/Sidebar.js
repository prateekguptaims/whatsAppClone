export default function Sidebar() {
  return (
    <div className="p-6 bg-green-700 text-white h-screen flex flex-col items-center shadow-lg">
      {/* User Avatar */}
      <img
        src="https://via.placeholder.com/60"
        alt="User Avatar"
        className="rounded-full mb-4 border-2 border-white hover:border-green-300 transition-all duration-300"
      />

      {/* User Name */}
      <h1 className="text-xl font-bold mb-1 text-center hover:text-green-300 transition-all duration-300">
        Your Name
      </h1>

      {/* Online Status */}
      <div className="flex items-center space-x-2">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        <p className="text-sm text-gray-200">Online</p>
      </div>

      {/* Divider */}
      <div className="w-full border-b border-green-600 my-6"></div>

      {/* Menu Items */}
      <nav className="w-full">
        <ul className="space-y-4">
          <li className="hover:bg-green-600 p-2 rounded-lg transition-all duration-300 cursor-pointer">
            <span className="flex items-center space-x-3">
              <span>🏠</span>
              <span>Home</span>
            </span>
          </li>
          <li className="hover:bg-green-600 p-2 rounded-lg transition-all duration-300 cursor-pointer">
            <span className="flex items-center space-x-3">
              <span>📂</span>
              <span>Files</span>
            </span>
          </li>
          <li className="hover:bg-green-600 p-2 rounded-lg transition-all duration-300 cursor-pointer">
            <span className="flex items-center space-x-3">
              <span>⚙️</span>
              <span>Settings</span>
            </span>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <button className="mt-auto w-full bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg transition-all duration-300">
        Logout
      </button>
    </div>
  );
}