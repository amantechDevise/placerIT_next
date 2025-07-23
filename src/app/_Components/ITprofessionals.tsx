import React from "react";

const ITprofessionals = () => {
  return (
    <section className="relative bg-white px-4 py-8 md:py-14 overflow-hidden">
      {/* Arrow in top-right corner */}
      <img
        src="/images/hero-arrow-1 2.svg"
        alt="Decorative Arrow"
        className="absolute top-4 right-4 md:right-[1.5rem]  2xl:right-75 w-20 sm:w-16 md:w-30 lg:w-[12rem] xl:w-45 h-auto animate-[bounce_3s_infinite]"
      />

      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side - Image & Logo */}
        <div className="relative w-full lg:w-1/2">
          <div className="relative z-10">
            <img
              src="/images/Group 190.svg"
              alt="Team of professionals"
              className="rounded-lg shadow-lg w-full h-auto object-cover "
            />
          </div>

          {/* Logo icon overlapping bottom-left */}
          <img
            src="/images/Group 171.svg"
            alt="Company Icon"
            className="absolute md:-bottom-8 -bottom-4  md:-left-15 -left-4 w-20 sm:w-[8rem] md:w-40 lg:w-30 h-auto z-20 animate-[spin_6s_linear_infinite]"
            style={{ transformOrigin: "center center" }}
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[30px]  md:text-[43px] font-extrabold text-gray-900 mb-4 font-raleway">
            Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">We Are</span>
          </h2>
          <p className="text-gray-600 text-[12px] md:text-[16px] leading-relaxed font-raleway">
            At PlacerIT, we are a passionate team of tech experts, developers,
            strategists, and designers dedicated to solving complex challenges
            with simple and effective IT solutions. Our commitment to excellence
            and customer satisfaction has made us a trusted partner to businesses
            of all sizes, across various industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ITprofessionals;
