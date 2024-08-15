import HeroSection from "./Components/HeroSection";
import FeatureSection from "./Components/FeatureSection";
import Testimonials from "./Components/Testimonials";
import { Helmet } from "react-helmet";
import Features from "./Components/Features";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto md:pt-5 px-6">
      <Helmet>
        <title>MediTech.ai</title>
      </Helmet>
      <HeroSection />
      <FeatureSection />
      <Features />
      <br />
      <Testimonials />
    </div>
  );
};

export default Home;
