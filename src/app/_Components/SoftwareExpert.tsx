import React from "react";

const SoftwareExpert = () => {
  return (
    <section className="relative bg-[#F1F6FF] px-4 py-12 md:py-20 lg:py-24 overflow-hidden">

      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side - Image & Logo */}
        <div className="relative w-full lg:w-1/2">
          <div className="relative z-10">
            <img
              src="/images/Group 647.svg"
              alt="Team of professionals"
              className="rounded-lg  w-full h-auto  "
            />
          </div>

        </div>


        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[30px]  md:text-[42px] font-extrabold text-gray-900 mb-4 font-raleway">
            Get Started with Expert {" "}




            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">Software Consultancy
            </span>
          </h2>
          <p className="text-gray-600 text-[12px] md:text-[16px] leading-relaxed font-raleway  font-normal">
            If you’re ready to take your business to the next level with tailored software solutions, PlacerIT is here to help. Our expert consultants provide actionable insights, practical strategies, and innovative solutions to drive your success.



          </p>
          <br />
          <p className="text-gray-600 text-[12px] md:text-[16px] leading-relaxed font-raleway  font-normal">Contact us today to schedule a consultation and find out how we can help you unlock the full potential of your business with the right technology!</p>
        </div>

      </div>
    </section>
  );
};

export default SoftwareExpert;
