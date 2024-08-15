import { teams } from "../../../constants";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center my-10 lg:my-20">
        Meet the{" "}
        <span className="bg-gradient-to-r from-cyan-300 to-indigo-500 text-transparent bg-clip-text">
          MediTech.ai
        </span>{" "}
        Team
      </h2>
      <div className="flex flex-wrap justify-center">
        {teams.map((team, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/2 px-4 py-2 flex mb-3"
          >
            <div className="w-full bg-neutral-900 rounded-md p-8 text-md border border-neutral-800 font-thin transition-transform hover:scale-105 flex flex-col justify-between">
              <div className="flex mt-4 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={team.image}
                  alt=""
                />
                <div>
                  <h6 className="text-lg font-semibold">{team.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {team.title}
                  </span>
                </div>
              </div>
              <p className="mt-4">{team.text}</p>
              <div className="flex mt-5 font-semibold">
                <a
                  href={team.linkedin}
                  className="flex items-center bg-indigo-600 py-1 px-4 mr-3 rounded-md hover:bg-indigo-700 hover:text-white transition duration-300"
                >
                  <ImLinkedin className="mr-2" /> LinkedIn
                </a>
                <a
                  href={team.github}
                  className="flex items-center py-1 px-4 rounded-md border hover:bg-gray-200 hover:text-black transition duration-300"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
