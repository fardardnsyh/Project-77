import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Lottie from "lottie-react";
import animationData from "../../assets/chat_1.json";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Assist from "./Assist";

const API_KEY = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const Chat = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const initChat = async () => {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const chat = model.startChat({
          history: [
            {
              role: "user",
              text: "Your name is MediTech.ai and It's fixed. You will answer only health-related questions, if you are asked questions that are not related to health, medical, or well-being you will politely answer to ask you health-related questions.",
            },
            {
              role: "model",
              text: "Understood. I am MediTech.ai, your dedicated healthcare AI assistant. I'm here to help you with any questions related to health, medical conditions, treatments, or wellness. If you have any questions about your health or want to learn more about a specific health topic, please feel free to ask. If your question is not related to health, I will kindly ask you to rephrase it to be about a health related topic. I am here to support you on your health journey!",
            },
          ],
          generationConfig: {
            maxOutputTokens: 100,
          },
        });

        const result = await chat.sendMessage("How many paws are in my house?");
        const response = await result.response;
        const text = await response.text();

        setChatHistory([
          { role: "user", text: "How many paws are in my house?" },
          { role: "model", text },
        ]);
      } catch (error) {
        console.error("Error initializing chat:", error);
      }
    };

    initChat();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setIsLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const chat = model.startChat();

      const result = await chat.sendMessage(inputMessage);
      const response = await result.response;
      const text = await response.text();

      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { role: "user", text: inputMessage },
        { role: "model", text },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setInputMessage("");
    setIsLoading(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <div className="mb-5 lg:mb-0">
        <div className="flex justify-center mr-5">
          <Lottie animationData={animationData} loop={true} />
        </div>
        <h1 className="text-center lg:text-left text-base border rounded-lg p-3 mx-2">
          Experience unparalleled AI assistance for your health and everyday
          life with MediTech.ai.
        </h1>
      </div>
      <div className="lg:col-span-2 lg:ml-4 w-full mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Chat Input</h2>
        <div className="h-96 overflow-y-scroll mb-4 p-4 bg-gray-700 rounded-lg">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`mb-2 p-3 rounded-lg ${
                message.role === "user"
                  ? "bg-indigo-600 text-white text-right"
                  : "bg-gray-600 text-white text-left"
              }`}
            >
              <strong>
                {message.role === "user" ? "User Prompt:" : "MediTech.ai:"}
              </strong>
              <hr className="my-2" />
              <ReactMarkdown>{message.text}</ReactMarkdown>
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="flex w-full">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow p-2 rounded-l-lg border border-gray-600 bg-gray-800 text-white focus:outline-none w-full"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-r-lg transition-colors duration-300"
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
