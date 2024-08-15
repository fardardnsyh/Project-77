import { useState } from "react";
import axios from "axios";

const PneumoniaDetection = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5002/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setPrediction(response.data.result);
    } catch (error) {
      console.error("There was an error making the request:", error);
      setPrediction("Error making prediction");
    }
  };

  return (
    <div>
      <h1>Pneumonia Detection</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload and Predict</button>
      </form>
      {prediction && (
        <div>
          <h2>Prediction Result: {prediction}</h2>
        </div>
      )}
    </div>
  );
};

export default PneumoniaDetection;
