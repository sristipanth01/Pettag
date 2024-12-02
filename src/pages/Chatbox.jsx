import React, { useState, useRef, useEffect } from "react";
import logo from "../images/logo2.png";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi, Pet Parichaye Chatbox 👋. Please click the following buttons to get Pet-related information or ask me a question.",
      time: "Nov 20, 9:31 AM",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = () => {
    if (userInput.trim()) {
      setMessages([
        ...messages,
        {
          sender: "user",
          text: userInput,
          time: new Date().toLocaleTimeString(),
        },
        {
          sender: "bot",
          text: "Thank you for your message. We’ll get back to you soon!",
          time: new Date().toLocaleTimeString(),
        },
      ]);
      setUserInput("");
    }
  };

  const handleQuickReply = (text) => {
    const botResponses = {
      "My Account Information": "Your account has been successfully linked.",
      "Tell me about Pet Parichaye":
        "Pet Parichaye is a digital pet identification system that ensures safety and better management for pets.",
      "Your Location": "We are based in Kathmandu, Nepal.",
      "What your system do?":
        "Our system helps manage pet information, generates QR tags, and facilitates better communication between pet owners and services.",
    };

    const botResponse =
      botResponses[text] || "I’m sorry, I didn’t understand that.";

    setMessages([
      ...messages,
      { sender: "user", text, time: new Date().toLocaleTimeString() },
      {
        sender: "bot",
        text: botResponse,
        time: new Date().toLocaleTimeString(),
      },
    ]);
  };

  return (
    <>
      {/* Toggle Button (Visible only on mobile) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 px-4 py-2 bg-blue-400 text-white rounded-full shadow-lg flex items-center space-x-2 z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Chat with us</span>
        </button>
      )}

      {/* Chatbox */}
      {isOpen && (
        <div
          className={`fixed ${
            isOpen
              ? "top-0 left-0 w-full h-full md:top-auto md:left-auto md:bottom-4 md:right-4 md:w-96 md:h-auto"
              : "hidden"
          } bg-white shadow-lg rounded-lg flex flex-col z-50`}
        >
          {/* Header */}
          <div className="bg-blue-400 text-white p-4 flex justify-between items-center sticky top-0">
            <div className="flex items-center space-x-2">
              <div className="w-14 h-10 rounded-full flex items-center justify-center">
                <img src={logo} alt="logo" />
              </div>
              <h1 className="text-lg font-semibold">Chat with us</h1>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white font-bold text-xl"
            >
              ×
            </button>
          </div>

          {/* Chat Area */}
          <div className="p-4 h-72 overflow-y-auto bg-gray-50 flex-grow">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col space-y-2 ${
                  msg.sender === "user" ? "items-end" : "items-start"
                } mb-4`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-400 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Reply Buttons */}
          <div className="p-4 bg-gray-200 space-y-2">
            <div className="flex flex-wrap gap-2">
              {[
                "My Account Information",
                "Tell me about Pet Parichaye",
                "Your Location",
                "What your system do?",
              ].map((label, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(label)}
                  className="px-3 py-1 bg-black text-white rounded-full hover:bg-slate-500 transition"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white flex items-center space-x-2 border-t border-gray-300">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Reply to Chatbox"
              className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-slate-500 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
