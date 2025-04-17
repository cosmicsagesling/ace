"use client";
import React, { useState, useRef, useEffect } from "react";
import { Send, X, Bot } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@heroui/input";
import ReactMarkdown from "react-markdown";
import NalaLogo from "./Nala";

interface Message {
  type: "user" | "bot";
  content: string;
  timestamp?: string;
}

interface ChatMessage {
  role: "user" | "model";
  parts: string;
}

const Nala: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial welcome message
    setMessages([
      {
        type: "bot",
        content:
          "Welcome to Amos Global Solutions! I'm Nala, your study abroad assistant. How can I help you today? You can ask me about courses, visas, accommodation, or any other study abroad related questions!",
      },
    ]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMessage: Message = {
      type: "user",
      content: inputValue,
      timestamp,
    };

    // Add user message to messages
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: inputValue,
          chatHistory: chatHistory,
        }),
      });

      const data = await response.json();

      // Update chat history and messages
      setChatHistory(data.updatedChatHistory);
      setMessages((prev) => [...prev, { type: "bot", content: data.reply }]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages((prev) => [
        ...prev,
        { type: "bot", content: "Error connecting to AI" },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Chat Icon with Badge */}
      <div className="fixed bottom-0 right-1 z-50">
        <button
        aria-label="Open Chat Bot"
          onClick={() => setIsOpen(true)}
          className={`relative w-full h-full  text-white rounded-full  transition-all duration-300 transform hover:scale-110 ${
            isOpen ? "hidden" : "flex"
          }`}
        >
<div className="animate-slideDown font-[geist] -left-44 absolute ">
  <div className="bg-white rounded-xl px-3 py-2 shadow-md text-sm max-md:text-tiny text-gray-800">
    Hey there! <br /> How can I help you today?
  </div>
  
  <div className="relative h-5 flex justify-end pr-4">
    <div className="absolute right-10 top-0 w-2 h-2 bg-white rounded-full shadow-sm"></div>
    <div className="absolute right-6 top-2 w-1.5 h-1.5 bg-white rounded-full shadow-sm"></div>
    <div className="absolute right-3 top-4 w-1 h-1 bg-white rounded-full shadow-sm"></div>
  </div>
</div>
<NalaLogo/>

        </button>
      </div>

      {/* Responsive Chat Window */}
      <Card
        className={`font-[geist] z-50 fixed bottom-4 right-4 w-full max-md:max-w-[330px] max-md:max-h-[430px] md:w-[450px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col transform transition-all duration-300 ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-4 md:p-6 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-full">
              <Bot size={24} className="text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Nala</h3>
              <p className="text-sm text-blue-100">Study Abroad Assistant</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-lime-500/30 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Area with ScrollArea */}
        <ScrollArea className="flex-1 p-4 space-y-4">
          {messages.map((message, index) => {
            const timestamp =
              message.timestamp ||
              new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              });
            const sender = message.type === "user" ? "You" : "Nala";

            return (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                } mb-4`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl relative ${
                    message.type === "user"
                      ? "bg-green-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 shadow-md rounded-bl-none"
                  }`}
                >
                  <ReactMarkdown>{message.content}</ReactMarkdown>

                  <div
                    className={`text-xs mt-2 flex justify-end items-center gap-2 ${
                      message.type === "user"
                        ? "text-blue-100"
                        : "text-gray-500"
                    }`}
                  >
                    <span>{timestamp}</span>
                    <span>•</span>
                    <span>{sender}</span>
                  </div>
                </div>
              </div>
            );
          })}
          {isTyping && (
            <div className="flex gap-2 text-gray-500 items-center p-4">
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              />
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          )}
          <div ref={messagesEndRef} />
        </ScrollArea>

        {/* Input Area */}
        <CardContent className="p-4 border-t-1 border-t-slate-300">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-gray-100 pl-3 rounded-xl focus:outline-none outline-none focus:ring-2 focus:ring-green-500 transition-all"
            />
            <button
              type="submit"
              className="p-4 bg-green-700 text-white rounded-xl hover:bg-green-700 transition-colors"
            >
              <Send size={20} />
            </button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default Nala;
