import React from "react";

const BusinessTogether = () => {
  return (
    <section className="relative bg-[#F1F6FF] px-4 py-12 md:py-20 lg:py-24 overflow-hidden">

      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side - Image & Logo */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[30px] md:text-[42px] font-extrabold text-gray-900 mb-4 font-raleway">
            Let’s Grow Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">Business Together</span>
          </h2>
          <p className="text-gray-600 text-[12px] md:text-[16px] leading-relaxed font-raleway  font-normal">
            Whether you’re just starting out or looking to take your digital marketing efforts to the next level, PlacerIT is here to help. Get in touch with us today for a free consultation and discover how we can help you achieve your digital marketing goals.
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
