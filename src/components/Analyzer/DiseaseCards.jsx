import { Link } from "react-router-dom";
import sentiment_image from "../../assets/analyzer-photo/sentiment-meditech.svg";
import diabetes_image from "../../assets/analyzer-photo/diabetes-meditech.svg";

const DiseaseCards = () => {
  const diseases = [
    {
      id: 1,
      link: "sentiment",
      name: "Sentiment Analysis",
      image: sentiment_image,
      description:
        "Sentiment analysis uses natural language processing to determine the sentiment behind text data, whether it’s positive, negative, or neutral. This can help in understanding customer opinions, market trends, and more.",
    },
    {
      id: 2,
      link: "diabetes",
      name: "Diabetes",
      image: diabetes_image,
      description:
        "Diabetes prediction involves analyzing various health indicators to determine the risk of diabetes. Early detection can lead to better management and treatment of the disease, improving overall health outcomes.",
    },
  ];

  return (
    <div className="container mx-auto py-3 lg:py-5 px-4">
      <div className="space-y-6">
        {diseases.map((disease) => (
          <div
            key={disease.id}
            className="relative border-4 m-3 lg:mx-10 border-transparent shadow-lg rounded-2xl overflow-hidden transform transition-transform hover:scale-105 flex flex-col md:flex-row"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-950 to-indigo-900 opacity-50"></div>
            <img
              src={disease.image}
              alt={disease.name}
              className="relative w-full md:w-1/3 h-48 object-cover md:h-auto"
            />
            <div className="relative p-10 m-5 rounded-xl flex flex-col justify-between bg-slate-400 bg-opacity-20 text-white">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{disease.name}</h2>
                <p className="text-gray-300 mb-4">{disease.description}</p>
              </div>
              <Link to={disease.link}>
                <button className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full w-full transition-colors">
                  Predict
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiseaseCards;
