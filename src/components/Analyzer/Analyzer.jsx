import { Helmet } from "react-helmet";
import DiseaseCards from "./DiseaseCards";

const Analyzer = () => {
  return (
    <div>
      <Helmet>
        <title>Analyzer</title>
      </Helmet>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center my-5 lg:my-10">
        Explore{" "}
        <span className="bg-gradient-to-r from-cyan-300 to-indigo-500 text-transparent bg-clip-text">
          Analyzer
        </span>{" "}
        Features
      </h2>
      <DiseaseCards />
    </div>
  );
};

export default Analyzer;
