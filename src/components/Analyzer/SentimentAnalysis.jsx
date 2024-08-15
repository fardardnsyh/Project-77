import { useState } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";

const SentimentAnalysis = () => {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [score, setScore] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://sentiment-analysis-flask.vercel.app/analyze",
        {
          text1: text,
        }
      );
      const data = response.data;
      setSentiment(data.compound);
      setScore({
        pos: data.pos,
        neu: data.neu,
        neg: data.neg,
        compound: data.compound,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">
          Sentiment Analyzer
        </h1>
        <p className="text-center mb-6 italic">
          Developed by:{" "}
          <a href="https://www.linkedin.com/in/abid-hasan-rafi/">
            {" "}
            <strong className="text-indigo-800 underline">
              Abid Hasan Rafi
            </strong>{" "}
          </a>
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            name="text1"
            placeholder="Say Something: ...."
            rows="10"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300"
          />
        </form>
        {sentiment !== null && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Analysis Results
            </h2>
            <p className="text-lg mb-6 text-gray-600">
              The sentiment of <strong>'{text}'</strong> is{" "}
              <strong className="text-green-600">
                {sentiment * 100}% positive
              </strong>
              !
            </p>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Score Table
            </h2>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 border-b text-left">
                    Sentiment Metric
                  </th>
                  <th className="py-2 px-4 border-b text-left">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b text-gray-700">Positive</td>
                  <td className="py-2 px-4 border-b text-gray-700">
                    {score.pos}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b text-gray-700">Neutral</td>
                  <td className="py-2 px-4 border-b text-gray-700">
                    {score.neu}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b text-gray-700">Negative</td>
                  <td className="py-2 px-4 border-b text-gray-700">
                    {score.neg}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-gray-700">Compound</td>
                  <td className="py-2 px-4 text-gray-700">{score.compound}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SentimentAnalysis;
