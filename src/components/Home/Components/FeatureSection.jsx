import { features } from "../../../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center my-10 lg:my-20">
          Behold{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-indigo-500 text-transparent bg-clip-text">
            MediTech.ai
          </span>{" "}
          Features
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-cyan-300 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
