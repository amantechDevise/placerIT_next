import React from "react";

const GetQuality = () => {
  return (
    <section className="relative bg-white px-4 py-12 md:py-20 lg:py-24 overflow-hidden">

      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side - Image & Logo */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">

          <h2 className="text-[30px] md:text-[42px] font-extrabold text-gray-900 mb-4 font-raleway">
            Get Started with {" "}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]"> Quality <br /> Assurance {" "}</span>
            Today
          </h2>
          <p className="text-gray-600 text-[12px] md:text-[16px] leading-relaxed font-raleway  font-normal">
            Quality is at the heart of every successful product. At PlacerIT, we are committed to ensuring your product meets the highest standards. Let us help you build a reliable, secure, and user-friendly product that will delight your customers.

            Contact Us to discuss your QA needs and get a custom quote for your project!
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

export default GetQuality;
