const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-neutral-700 py-10">
      <section className="flex flex-col items-center">
        <p className="text-white text-center font-bold text-4xl lg:text-5xl mb-5">
          <span className="font-bold mb-10 bg-gradient-to-r from-cyan-300 to-indigo-500 text-transparent bg-clip-text">
            MediTech.ai
          </span>
        </p>
        <p className="text-white text-center mb-10 px-4 w-4/5">
          Transforming Healthcare with AI - With MediTech.ai, your well-being is
          our priority
        </p>
        <div className="w-full flex justify-center items-center">
          <p className="w-full font-poppins font-normal mx-auto text-center text-18px leading-27px text-white">
            Copyright Ⓒ {currentYear} MediTech.ai{" "}
            <span className="mx-3">|</span>
            <span className="">All Rights Reserved</span>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
