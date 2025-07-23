import React from "react";

const ConsultancyServices = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center px-6 py-8 md:py-14 bg-white">
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
            At <span className="font-semibold">PlaceIT</span>, we specialize in providing expert software consultancy services that help businesses solve complex problems, streamline operations, and drive digital transformation. Our team of experienced consultants collaborates with you to design, implement, and optimize custom software solutions tailored to your specific business needs.
          </p>
          <p className="text-gray-700 font-regular font-raleway text-[12px] md:text-[16px]">
          Whether you’re a startup or an established enterprise, we provide strategic guidance to help you make the most of your technology investments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsultancyServices;
