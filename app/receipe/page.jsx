
"use client";
import React, { useState } from "react";
import Image from "next/image";
import MarcaAyacucho from "@/public/Logos/MarcaAyacucho 1.svg";

export default function Page() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSend = () => {
    if (userInput.trim()) {
      setMessages([...messages, { type: "user", text: userInput }]);
      setUserInput("");
      //Llamada a la API
    }
  };

  const handleClear = () => {
    setMessages([]);
  };

  return (
    <div className="h-screen w-screen p-10 bg-white flex flex-col">
      <div className="flex flex-col items-center mb-6">
        <div className="flex flex-row items-center bg-green-100 p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center text-blue-600 mr-4">
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
      <div className="flex flex-col flex-grow bg-green-100 p-6 rounded-lg shadow-lg overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 p-4 rounded-lg ${msg.type === "user" ? "bg-blue-400 text-white self-end" : "bg-green-400 text-white self-start"}`}
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
          className="p-4 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
        >
          Apachiy
        </button>
        <button
          onClick={handleClear}
          className="p-4 bg-red-500 text-white rounded-lg ml-4 hover:bg-red-600"
        >
          Chinkachiy
        </button>
      </div>
    </div>
  );
}
