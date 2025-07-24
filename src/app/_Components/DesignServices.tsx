import React from "react";


const DesignServices = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center px-6 py-8 md:py-24 bg-white">
      <div className="max-w-7xl flex flex-col md:flex-row items-center gap-6 w-full">
        {/* Left Side - Image and Overlay Graphics */}
          <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl md:text-[80px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] font-raleway">
            UI/UX {" "}
          </h2>
          <h2 className="text-black  md:text-[42px] text:3xl mb-6 font-extrabold font-raleway">
           Design Services
          </h2>
          <p className="text-gray-700 mb-6 font-regular font-raleway md:text-[16px] text-[12px]">
            At <span className="font-semibold">PlaceIT</span>, we specialize in
            harnessing the power of Blockchain technology to create innovative,
            secure, and transparent solutions for businesses across industries.
            Whether you're looking to integrate blockchain into your existing
            systems or build entirely new decentralized applications, our team
            of experts is here to guide you through every stage of your
            blockchain journey.
          </p>
          <p className="text-gray-700 font-regular font-raleway md:text-[16px] text-[12px]">
            Blockchain is revolutionizing industries by offering solutions that
            improve transparency, security, efficiency, and traceability. As a
            trusted blockchain development partner, we provide customized
            solutions that empower your business to leverage the full potential
            of this disruptive technology.
          </p>
        </div>
    

        {/* Right Side - Text Content */}
          <div className="relative w-full md:w-1/2">
          <img
            src="/images/Group 649.svg"
            alt="User working on blockchain"
            className="w-full rounded-xl "
          />
          {/* Top Right Icon */}
          <img
            src="/images/Group 389.png"
            alt="Top graphic"
            className="absolute -right-6 -top-6 w-16 h-16 md:w-30 md:h-30 animate-[spin_8s_linear_infinite]"
            style={{ transformOrigin: "center center" }}
          />
          <img
            src="/images/Group 368.svg"
            alt="Bottom graphic"
            className="absolute -bottom-8 -left-8 md:-bottom-40 md:-left-7 w-48 h-20 md:w-80 md:h-80 "
          />
        </div>
      </div>
    </section>
  );
};

export default DesignServices;
