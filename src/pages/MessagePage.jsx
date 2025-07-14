import React, { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MessagePage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { from: "vendor", text: "Hello! How can I help you with your wedding plans?" },
    { from: "user", text: "Hi! I love your photography. Are you available in September?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { from: "user", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="flex items-center px-4 py-3 bg-pink-100 shadow-md">
        <ArrowLeft className="h-6 w-6 text-pink-700 cursor-pointer" onClick={() => navigate(-1)} />
        <h2 className="ml-4 text-xl font-semibold text-pink-700">Lens Studio</h2>
      </div>

{/* Messages */}
<div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
  {messages.map((msg, index) => (
    <div
      key={index}
      className={`max-w-[60%] px-3 py-2 rounded-2xl text-sm shadow leading-relaxed ${
        msg.from === "user"
          ? "ml-auto bg-pink-500 text-white"
          : "mr-auto bg-pink-100 text-gray-800"
      }`}
      style={{ wordBreak: "break-word" }}
    >
      {msg.text}
    </div>
  ))}
</div>

      {/* Input Box */}
      <div className="flex items-center p-3 border-t border-pink-200 bg-white">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded-full border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="ml-2 bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
