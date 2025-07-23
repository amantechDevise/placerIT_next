"use client";

import React, { useEffect } from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    title: 'Design Tools',
    icon: '/images/Group 399.png',
    description:
      'Sketch, Figma, Adobe XD, InVision, Zeplin.',
  },
  {
    title: 'Prototyping & Wireframing',
    icon: '/images/Group 400.png',
    description:
      'Axure, Marvel, Balsamiq',
  },
  {
    title: 'User Testing',
    icon: '/images/Group 401.png',
    description:
      'UsabilityHub, Lookback.io, Optimal Workshop.',
  },
];

const lastStep = {
  title: 'Collaboration Tools',
  icon: '/images/Group 402.png',
  description:
    'Miro, Slack, Trello',
};

 
const DesignMatters = () => {
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
    <section className="bg-[#F7F7F7] py-8 md:py-14 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4 md:text-[42px]">
        Why UI/UX  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] font-raleway">Design Matters</span>
      </h2>
      <p className="text-gray-600 max-w-4xl mx-auto mb-12 md:text-[16px] text-[12px] font-raleway">
       Effective UI/UX design is the foundation of a great digital experience. It ensures that your users not only understand how to navigate your product but also enjoy interacting with it. A well-designed product can boost user engagement, increase retention rates, and drive business growth. By focusing on usability and aesthetics, we create designs that leave a lasting impression on your users and enhance your overall brand presence.
      </p>

      {/* Top 3 Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:items-start items-center text-center">
              <img src={step.icon} alt={step.title} className="mb-4" />
              <h3 className="font-semibold text-lg mb-2 font-raleway">{step.title}</h3>
              <p className="text-gray-600 text-sm font-raleway">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

{/* Rocket + Horizontal Card Section */}
<div className="flex flex-col md:flex-row  items-center justify-end  mt-8 max-w-6xl mx-auto px-4 md:px-0"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
  {/* Rocket on the left */}

  {/* Horizontal "Support & Optimization" Card */}
  <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] p-6 flex flex-col md:flex-row md:basis-2/3 items-center text-start hover:shadow-lg transition-shadow w-full ">
    <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
      <img src={lastStep.icon} alt={lastStep.title} className="w-25 h-25" />
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-1 font-raleway">{lastStep.title}</h3>
      <p className="text-gray-600 text-sm font-raleway">{lastStep.description}</p>
    </div>
  </div>
    <div className="flex-shrink-0 md:basis-1/3">
    <img src="/images/s1.png" alt="Rocket path" className="w-40 md:w-60 h-auto  z-10" />
  </div>

</div>


    </section>
  );
};

export default DesignMatters;
