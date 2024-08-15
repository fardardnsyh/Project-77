import Lottie from "lottie-react";
import animationData from "../../../assets/Animation_Hero.json";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center lg:mt-20">
      <div className="grid lg:grid-cols-2 items-center justify-center gap-8">
        <div className="flex justify-center lg:justify-end">
          <Lottie animationData={animationData} loop={true} />
        </div>
        <div className="text-center lg:ml-5 lg:text-left">
          <h1 className="tracking-wide">
            <span className="text-4xl lg:text-5xl font-bold mb-10 bg-gradient-to-r from-cyan-300 to-indigo-500 text-transparent bg-clip-text">
              MediTech.ai
            </span>
            <br />
            <p className="mt-5 text-3xl lg:text-4xl">
              Your Intelligent Campus Healthcare Assistant
            </p>
          </h1>
          <p className="mt-5 text-lg text-neutral-500 max-w-4xl mx-auto lg:mx-0">
            Experience the future of healthcare with MediTech.ai. Our advanced
            AI-powered platform provides personalized health insights, 24/7
            virtual assistance, and seamless healthcare management to help you
            stay on top of your well-being.
          </p>
          <div className="flex justify-center lg:justify-start space-x-3 my-10">
            <a
              href="/analyzer"
              className="bg-indigo-600 py-3 px-4 rounded-md hover:bg-indigo-700 hover:text-white transition duration-300"
            >
              Try Analyzer
            </a>
            <a
              href="/assist"
              className="py-3 px-4 rounded-md border hover:bg-gray-200 hover:text-black transition duration-300"
            >
              Open Assistant
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
