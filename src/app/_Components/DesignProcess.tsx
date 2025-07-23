"use client";

import React, { useEffect } from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";

const uiuxSteps = [
  {
    title: "Research & Discovery",
    icon: "/images/Group 392.png",
    description:
      "We begin by understanding your brand, users, and business goals. This phase involves market research, user personas, and competitor analysis.",
  },
  {
    title: "Wireframing & Prototyping",
    icon: "/images/Group 393.png",
    description:
      "We create wireframes to outline the basic structure of your product, followed by interactive prototypes to visualize user flows and interactions.",
  },
  {
    title: "UI Design",
    icon: "/images/Group 394.png",
    description:
      "Our designers bring your product to life with visually engaging interfaces that are not only beautiful but also functional and aligned with your brand.",
  },
  {
    title: "User Testing",
    icon: "/images/Group 395.png",
    description:
      "Before finalizing the design, we conduct usability testing to gather feedback and refine the design based on real user experiences.",
  },
  {
    title: "Launch & Iteration",
    icon: "/images/Group 396.png",
    description:
      "Once the design is finalized, we collaborate with developers for a smooth handoff and continue to refine and improve the product after launch.",
  },
];

const DesignProcess = () => {
  useEffect(() => {
    const aosConfig: AosOptions = {
      duration: 1000,
      once: true,
      offset: 120,
      easing: "ease-in-out",
    };
    AOS.init(aosConfig);
  }, []);

  return (
    <section className="bg-[#F1F6FF] py-8 md:py-14 px-6 text-center">
      <div className="relative w-full text-center mb-8">
        <h2 className="text-3xl font-bold md:text-[42px] font-raleway">
          Our <span className="text-black">UI/UX</span>{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">
            Design Process
          </span>
        </h2>

        {/* Right-side logo absolutely positioned */}
        <div className="absolute md:right-20 -right-2 top-1/2 -translate-y-1/2 animate-[bounce_4s_infinite]">
          <img src="/images/logo_design.png" alt="Logo" className="w-20 md:w-30" />
        </div>
      </div>

      {/* Step Cards */}
      <div
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10 mt-10"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {uiuxSteps.slice(0, 3).map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:items-start md:text-start text-center items-center">
              <img
                src={step.icon}
                alt={step.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="font-semibold md:text-[22px] text-[16px]  mb-2 font-raleway">{step.title}</h3>
              <p className="text-gray-600 md:text-[16px] text-[12px] font-raleway">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div
  className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto"
  data-aos="fade-up"
  data-aos-anchor-placement="top-bottom"
>
  {/* Left card */}
  <div className="flex bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 hover:shadow-lg transition-shadow">
    <div className="flex flex-col md:w-80 md:items-start md:text-start text-center items-center">
      <img src={uiuxSteps[3].icon} alt={uiuxSteps[3].title} className="w-16 h-16 mb-4" />
      <h3 className="font-semibold md:text-[22px] text-[16px] mb-2 font-raleway">{uiuxSteps[3].title}</h3>
      <p className="text-gray-600 md:text-[16px] text-[12px] font-raleway">{uiuxSteps[3].description}</p>
    </div>
  </div>

  <div className="md:flex-grow flex flex-col items-start">
    <div className="bg-white w-full rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:items-start md:text-start text-center items-center">
        <img src={uiuxSteps[4].icon} alt={uiuxSteps[4].title} className="w-16 h-16 mb-4" />
        <h3 className="font-semibold md:text-[22px] text-[16px] mb-2 font-raleway">{uiuxSteps[4].title}</h3>
        <p className="text-gray-600 md:text-[16px] text-[12px] font-raleway">{uiuxSteps[4].description}</p>
      </div>
    </div>

    <div className="mt-8 text-center text-[#C3C8D1] md:text-[40px] text-auto tracking-[0.3em] font-semibold opacity-40 select-none">
      U I / U X &nbsp; P l a c e r I T
    </div>
  </div>
</div>



    </section>
  );
};

export default DesignProcess;
