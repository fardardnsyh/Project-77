import { useState } from "react";
import axios from "axios";

const DiabetesPrediction = () => {
  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    bloodpressure: "",
    skinthickness: "",
    insulin: "",
    bmi: "",
    dpf: "",
    age: "",
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict/diabetes",
        formData
      );
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("There was an error making the request", error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Diabetes Prediction
      </h1>
      <h5 className="text-lg text-center mb-6">
        Please enter the patient details
      </h5>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          {[
            "pregnancies",
            "glucose",
            "bloodpressure",
            "skinthickness",
            "insulin",
            "bmi",
            "dpf",
            "age",
          ].map((field, index) => (
            <div key={index} className="w-full md:w-1/2 px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor={field}
              >
                {field.charAt(0).toUpperCase() +
                  field.slice(1).replace(/([A-Z])/g, " $1")}
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type={field === "bmi" || field === "dpf" ? "text" : "number"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Enter ${field}`}
                required
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Predict
        </button>
      </form>
      {prediction !== null && (
        <div className="text-center mt-8">
          <h3 className="text-xl">
            Prediction Result:{" "}
            {prediction === 1
              ? "Likely to have diabetes"
              : "Unlikely to have diabetes"}
          </h3>
        </div>
      )}
    </div>
  );
};

export default DiabetesPrediction;
