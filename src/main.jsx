import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Analyzer from "./components/Analyzer/Analyzer";
import Classifier from "./components/Classifier/Classifier";
import Assist from "./components/Assist/Assist";
import About from "./components/About/About";
import DiabetesPrediction from "./components/Analyzer/DiabetesPrediction";
import SentimentAnalysis from "./components/Analyzer/SentimentAnalysis";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/analyzer",
        element: <Analyzer />,
      },
      {
        path: "/classifier",
        element: <Classifier />,
      },
      {
        path: "/assist",
        element: <Assist />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/analyzer/diabetes",
        element: <DiabetesPrediction />,
      },
      {
        path: "/analyzer/sentiment",
        element: <SentimentAnalysis />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
