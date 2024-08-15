import React, { useState } from "react";

function BrainTumorDetection() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      setError("Please select an image file");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setLoading(true);
    try {
      const response = await fetch("http://localhost:4555/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const status = data.predvalue ? "Positive" : "Negative";
      setPrediction(status);
      setError("");
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to fetch. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="BrainTumorDetection">
      <h1>Brain Tumor Detection</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Loading..." : "Upload"}
      </button>
      {error && (
        <div style={{ color: "red" }}>
          <p>Error: {error}</p>
        </div>
      )}
      {prediction && (
        <div>
          <h2>Prediction: {prediction}</h2>
        </div>
      )}
    </div>
  );
}

export default BrainTumorDetection;
