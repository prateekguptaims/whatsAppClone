import Sidebar from "@/components/Sidebar.js";
// import ChatApp from "../components/ChatApp.jsx";
import Chat from "@/components/Chat.js";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* <ChatApp /> */}
      <Sidebar />
      <Chat />
    </div>
  );
}
