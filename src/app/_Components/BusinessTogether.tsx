import React from "react";

const BusinessTogether = () => {
  return (
    <section className="relative bg-[#F1F6FF] px-4 py-8 md:py-14 overflow-hidden">

      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side - Image & Logo */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[30px] md:text-[42px] font-extrabold text-gray-900 mb-4 font-raleway">
            Let’s Grow Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">Business Together</span>
          </h2>
          <p className="text-gray-600 text-[12px] md:text-[16px] leading-relaxed font-raleway  font-normal">
           PlacerIT can assist you whether your digital marketing initiatives are wanting to be elevated or you are just starting off. Contact us now to arrange a free consultation and learn how we could support your digital marketing objectives.
          </p>
        </div>

        {/* Right Side - Text Content */}

        <div className="relative w-full lg:w-1/2">
          <div className="relative z-10">
            <img
              src="/images/bussinsimage.svg"
              alt="Team of professionals"
              className="rounded-lg  w-full h-auto  "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessTogether;
