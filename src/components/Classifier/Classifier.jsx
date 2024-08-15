import { Helmet } from "react-helmet";
import PneumoniaDetection from "./PneumoniaDetection";

const Classifier = () => {
  return (
    <div>
      <Helmet>
        <title>Classifier</title>
      </Helmet>
      <h1>This is Classifier!</h1>
      <PneumoniaDetection />
    </div>
  );
};

export default Classifier;
