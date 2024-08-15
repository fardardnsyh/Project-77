import Lottie from "lottie-react";
import animationData1 from "../../../assets/assist.json";
import animationData2 from "../../../assets/classifier.json";
import animationData3 from "../../../assets/analyzer.json";

const Features = () => {
  return (
    <div className="my-20">
      <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl md:text-left my-8 tracking-wide">
        AI-Optimized Medical Assistant
      </h2>
      <div className="grid lg:grid-cols-2 items-center justify-center gap-8">
        <div className="flex justify-center lg:justify-end">
          <Lottie animationData={animationData1} loop={true} />
        </div>
        <div className="text-center lg:ml-5 lg:text-left">
          <h1 className="tracking-wide">
            <br />
            <p className="mt-5 text-2xl lg:text-3xl">
              Get The Best Out Of Your Healthcare Assistant
            </p>
          </h1>
          <p className="mt-5 text-lg text-neutral-500 max-w-4xl mx-auto lg:mx-0">
            Discover the future of healthcare with MediTech.ai. Our cutting-edge
            AI chatbot delivers personalized health insights, round-the-clock
            virtual assistance, and streamlined healthcare management, making it
            easier than ever to maintain your well-being.
          </p>
          <div className="flex justify-center lg:justify-start space-x-3 my-10">
            <a
              href="/assist"
              className="py-3 px-4 rounded-md border hover:bg-gray-200 hover:text-black transition duration-300"
            >
              Try Assistant
            </a>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl md:text-right my-8 tracking-wide">
        AI Medical Image Classifier
      </h2>

      <div className="flex justify-center lg:justify-end">
        <Lottie
          animationData={animationData2}
          loop={true}
          className="h-[500px] md:hidden"
        />
      </div>
      <div className="grid lg:grid-cols-2 items-center justify-center gap-8">
        <div className="text-center lg:ml-5 lg:text-left">
          <h1 className="tracking-wide">
            <br />
            <p className="mt-5 text-2xl lg:text-3xl">
              Experience Intelligent Health Classifier
            </p>
          </h1>
          <p className="mt-5 text-lg text-neutral-500 max-w-4xl mx-auto lg:mx-0">
            Introducing the Intelligent Health Classifier by MediTech.ai. This
            advanced tool leverages AI to accurately classify health conditions,
            providing precise diagnoses and personalized treatment
            recommendations. Enhance your healthcare experience with faster,
            smarter, and more reliable health assessments.
          </p>
          <div className="flex justify-center lg:justify-start space-x-3 my-10">
            <a
              href="/classifier"
              className="py-3 px-4 rounded-md border hover:bg-gray-200 hover:text-black transition duration-300"
            >
              Try Classifier
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Lottie
            animationData={animationData2}
            loop={true}
            className="h-[500px] hidden md:block"
          />
        </div>
      </div>
      <hr />
      <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl md:text-left my-8 tracking-wide">
        Smart AI Medical Analyzer
      </h2>
      <div className="grid lg:grid-cols-2 items-center justify-center gap-8">
        <div className="flex justify-center lg:justify-end">
          <Lottie
            animationData={animationData3}
            loop={true}
            className="h-[450px] lg:mr-12"
          />
        </div>
        <div className="text-center lg:ml-5 lg:text-left">
          <h1 className="tracking-wide">
            <br />
            <p className="mt-5 text-2xl lg:text-3xl">
              Intelligent AI Health Analyzer
            </p>
          </h1>
          <p className="mt-5 text-lg text-neutral-500 max-w-4xl mx-auto lg:mx-0">
            From detecting early signs of illness to providing proactive health
            recommendations, our analyzer empowers individuals to take control
            of their well-being with confidence and clarity. Experience the
            future of health assessment with MediTech.ai.
          </p>
          <div className="flex justify-center lg:justify-start space-x-3 my-10">
            <a
              href="/analyzer"
              className="py-3 px-4 rounded-md border hover:bg-gray-200 hover:text-black transition duration-300"
            >
              Try Analyzer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
