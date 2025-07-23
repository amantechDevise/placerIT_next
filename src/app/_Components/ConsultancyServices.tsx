import React from "react";

const ConsultancyServices = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center px-6 py-12 md:py-20 bg-white">
      <div className="max-w-7xl flex flex-col md:flex-row items-center gap-6 w-full">
        {/* Left Side - Image and Overlay Graphics */}
        <div className="relative w-full md:w-1/2">
          <img
            src="/images/Group 648.jpg"
            alt="User working on blockchain"
            className="w-full rounded-xl "
          />
          {/* Top Right Icon */}
          <img
            src="/images/Group 375.png"
            alt="Top graphic"
            className="absolute left-6 top-6 sm:w-35 w-15 h-15 sm:h-35 md:w-33 md:h-33 animate-[spin_8s_linear_infinite]"
            style={{ transformOrigin: "center center" }}
          />
          <img
            src="/images/Group 368.svg"
            alt="Bottom graphic"
            className="absolute -bottom-3 left-5 sm:left-50 md:-bottom-20 md:left-40 w-72 h-20 sm:h-35 md:w-80 md:h-80 "
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-[40px] md:text-[80px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] font-raleway">
            Blockchain
          </h2>
          <h2 className="text-black text-[30px] md:text-[42px] mb-6 font-extrabold font-raleway">
            Technology Solutions
          </h2>
          <p className="text-gray-700 mb-6 font-regular font-raleway text-[12px] md:text-[16px]">
            At <span className="font-semibold">PlaceIT</span>, we specialize in
            harnessing the power of Blockchain technology to create innovative,
            secure, and transparent solutions for businesses across industries.
            Whether you're looking to integrate blockchain into your existing
            systems or build entirely new decentralized applications, our team
            of experts is here to guide you through every stage of your
            blockchain journey.
          </p>
          <p className="text-gray-700 font-regular font-raleway text-[12px] md:text-[16px]">
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

export default ConsultancyServices;
