import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Lottie from "lottie-react";
import animationData from "../../assets/chat_2.json";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const MultimodalInput = () => {
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState([]);
  const [responseText, setResponseText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fileToGenerativePart = async (file) => {
    const base64EncodedDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.readAsDataURL(file);
    });
    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  };

  const handleImageChange = async (e) => {
    const files = e.target.files;
    const imageParts = await Promise.all([...files].map(fileToGenerativePart));
    setImages(imageParts);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

      const result = await model.generateContent([prompt, ...images]);
      const response = await result.response;
      const text = response.text();
      setResponseText(text);
    } catch (error) {
      console.error("Error generating content:", error);
      setResponseText("Error generating content. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <div>
        <div className="flex justify-center">
          <Lottie animationData={animationData} loop={true} />
        </div>
        <h1 className="text-center lg:text-left text-base border rounded-lg p-3 mx-2">
          Enhance your healthcare experience with intelligent, context-aware
          assistance that understands and addresses your needs holistically.
          Introducing MediTech.ai's advanced multimodal assistant, capable of
          processing both text and image inputs to provide accurate and
          insightful text-based responses.
        </h1>
      </div>
      <div className="w-full lg:col-span-2 lg:ml-4 mt-8 mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Multimodal Input</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-300"
            >
              Images:
            </label>
            <input
              type="file"
              id="images"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              required
              className="mt-1 p-2 block w-full border-gray-600 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="prompt"
              className="block text-sm font-medium text-gray-300"
            >
              Prompt:
            </label>
            <input
              type="text"
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              required
              className="mt-1 p-2 block w-full border-gray-600 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isLoading ? "Generating..." : "Generate"}
          </button>
        </form>
        {responseText && (
          <div className="mt-6 bg-gray-700 p-4 rounded-md">
            <h3 className="text-xl font-bold mb-2 text-white">Response:</h3>
            <ReactMarkdown className="text-gray-300">
              {responseText}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultimodalInput;
