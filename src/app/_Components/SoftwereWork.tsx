"use client";

import React, { useEffect } from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    title: 'Consultation & Discovery',
    icon: '/images/Group 382.png',
    description:
      'We begin by understanding your business needs, challenges, and goals. Through in-depth consultations, we analyze your existing systems, define requirements, and explore the best technological solutions.',
  },
  {
    title: 'Solution Design & Strategy',
    icon: '/images/Group 383.png',
    description:
      'Based on your requirements, we propose customized software solutions, outline a clear strategy, and develop a detailed implementation plan that aligns with your business objectives.',
  },
  {
    title: 'Implementation & Execution',
    icon: '/images/Group 384.png',
    description:
      'Our consultants work closely with your team to implement the solution. We follow best practices, ensuring a seamless integration of new systems with your existing infrastructure.',
  },
];

const lastStep = {
  title: 'Support & Optimization',
  icon: '/images/Group 378.png',
  description:
    'After deployment, we provide continuous support to ensure your systems perform optimally. We help with monitoring, troubleshooting, updates, and system improvements.',
};

 
const SoftwereWork = () => {
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
    <section className="bg-[#F7F7F7] py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4 md:text-[42px]">
        How <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">We Work</span>
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Our approach to software consultancy is focused on collaboration, transparency, and delivering real value to your business. Here’s how we work.
      </p>

      {/* Top 3 Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col items-center text-center">
              <img src={step.icon} alt={step.title} className="mb-4" />
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

{/* Rocket + Horizontal Card Section */}
<div className="flex flex-col md:flex-row items-center justify-end  mt-8 max-w-6xl mx-auto px-4 md:px-0"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
  {/* Rocket on the left */}
  <div className="flex-shrink-0">
    <img src="/images/Group 646.png" alt="Rocket path" className="w-60 md:w-80 h-auto " />
  </div>

  {/* Horizontal "Support & Optimization" Card */}
  <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] p-6 flex flex-col md:flex-row items-center text-left hover:shadow-lg transition-shadow w-full md:w-[750px] ">
    <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
      <img src={lastStep.icon} alt={lastStep.title} className="w-40 h-40" />
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-1">{lastStep.title}</h3>
      <p className="text-gray-600 text-sm">{lastStep.description}</p>
    </div>
  </div>
</div>


    </section>
  );
};

export default SoftwereWork;
