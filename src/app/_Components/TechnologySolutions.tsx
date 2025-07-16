import React from "react";


const TechnologySolutions = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center px-6 py-12 md:py-20 bg-white">
      <div className="max-w-7xl flex flex-col md:flex-row items-center gap-6 w-full">
        {/* Left Side - Image and Overlay Graphics */}
        <div className="relative w-full md:w-1/2">
          <img
            src="/images/image.svg"
            alt="User working on blockchain"
            className="w-full rounded-xl "
          />
          {/* Top Right Icon */}
          <img
            src="/images/Group 440.svg"
            alt="Top graphic"
            className="absolute -right-6 -top-6 w-16 h-16 md:w-30 md:h-30 animate-[spin_8s_linear_infinite]"
            style={{ transformOrigin: "center center" }}
          />
          <img
            src="/images/Blockchain-Development.svg"
            alt="Bottom graphic"
            className="absolute -bottom-8 -left-8 md:-bottom-15 md:-left-15 w-20 h-20 md:w-40 md:h-40 animate-[bounce_4s_infinite]"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-[80px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] font-raleway">
            Blockchain
          </h2>
          <h2 className="text-black text-[42px] mb-6 font-extrabold font-raleway">
            Technology Solutions
          </h2>
          <p className="text-gray-700 mb-6 font-regular font-raleway text-[16px]">
            At <span className="font-semibold">PlaceIT</span>, we specialize in
            harnessing the power of Blockchain technology to create innovative,
            secure, and transparent solutions for businesses across industries.
            Whether you're looking to integrate blockchain into your existing
            systems or build entirely new decentralized applications, our team
            of experts is here to guide you through every stage of your
            blockchain journey.
          </p>
          <p className="text-gray-700 font-regular font-raleway text-[16px]">
            Blockchain is revolutionizing industries by offering solutions that
            improve transparency, security, efficiency, and traceability. As a
            trusted blockchain development partner, we provide customized
            solutions that empower your business to leverage the full potential
            of this disruptive technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologySolutions;
