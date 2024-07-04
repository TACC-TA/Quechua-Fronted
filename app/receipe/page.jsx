"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MarcaAyacucho from "@/public/Logos/MarcaAyacucho 1.svg";
import { getMessages } from "../api/translate.api";

export default function Page() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSendButtonEnabled, setIsSendButtonEnabled] = useState(false);
  const [isClearButtonEnabled, setIsClearButtonEnabled] = useState(false);

  useEffect(() => {
    setIsSendButtonEnabled(userInput.trim().length > 0);
  }, [userInput]);

  useEffect(() => {
    setIsClearButtonEnabled(messages.length > 0);
  }, [messages]);

  const handleSend = async () => {
    if (userInput.trim()) {
      setMessages([...messages, { type: "user", text: userInput }]);

      setUserInput("");

      try {
        const data = await getMessages(userInput);
        setMessages( messages => [...messages, { type: "bot", text: data.translate}]);
      } catch (error) {
        console.error("Error fetching translation:", error);
      }
    }
  };

  const handleClear = () => {
    setIsModalOpen(true);
  };

  const confirmClear = () => {
    setMessages([]);
    setIsModalOpen(false);
  };

  const cancelClear = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen w-screen p-10 bg-cover bg-center bg-yellow-800 flex flex-col">
      <div className="flex flex-col items-center mb-6">
        <div className="flex flex-row items-center bg-yellow-400 p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center text-purple-950 mr-4">
            ¿Imatataq kunan yanunki?
          </h1>
          <Image
            src={MarcaAyacucho}
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        </div>
      </div>
      <div className="flex flex-col flex-grow bg-emerald-200 p-6 rounded-lg shadow-lg overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 p-4 rounded-lg ${
              msg.type === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-green-400 text-white self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          className="flex-grow p-4 border border-blue-500 rounded-l-lg focus:outline-none"
          placeholder="Kaypi qillqay..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          disabled={!isSendButtonEnabled}
          className={`p-4 rounded-r-lg ${
            isSendButtonEnabled
              ? "bg-blue-700 text-white hover:bg-blue-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Apachiy
        </button>
        <button
          onClick={handleClear}
          disabled={!isClearButtonEnabled}
          className={`p-4 rounded-lg ml-4 ${
            isClearButtonEnabled
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Chinkachiy
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl mb-4">¿Segurochu borranki?</h2>
            <div className="flex justify-end">
              <button
                onClick={confirmClear}
                className="px-4 py-2 bg-red-500 text-white rounded-lg mr-4 hover:bg-red-600"
              >
                Yuyachiy
              </button>
              <button
                onClick={cancelClear}
                className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
              >
                Sayachiy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
