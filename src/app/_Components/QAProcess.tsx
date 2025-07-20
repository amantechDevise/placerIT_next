"use client";

import React, { useEffect } from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    title: 'Requirement Analysis',
    icon: '/images/Group 360.png',
    description:
      'We start by understanding the specific needs of your project and the desired quality metrics. This helps us define the testing strategy and scope.',
  },
  {
    title: 'Test Planning',
    icon: '/images/Group 361.png',
    description:
      'Our QA team creates a detailed test plan, including objectives, methodologies, tools, and timelines, ensuring every aspect is covered.',
  },
  {
    title: 'Test Design',
    icon: '/images/Group 362.png',
    description:
      'We design test cases that align with the project requirements, focusing on critical functionality, performance, and user scenarios.',
  },
  {
    title: 'Test Execution',
    icon: '/images/Group 363.png',
    description:
      'Our team executes manual or automated tests, carefully documenting the results and identifying any defects or issues.',
  },
  {
    title: 'Bug Tracking and Reporting',
    icon: '/images/Group 364.png',
    description:
      'We provide clear and detailed reports on any defects found, helping your development team understand and resolve the issues quickly.',
  },
  {
    title: 'Final Verification & Validation',
    icon: '/images/Group 365.png',
    description:
      'Before delivery, we conduct final validation and verification to ensure the product is free from defects and meets quality standards.',
  }

];




const QAProcess = () => {
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
    <section className="bg-[#F1F6FF] py-16 px-6 text-center">
      <h2 className="text-[30px] font-bold mb-4 md:text-[42px]">
        Our <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">QA Process</span>
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Our approach to software consultancy is focused on collaboration, transparency, and delivering real value to your business. Here’s how we work.
      </p>

      {/* Top 3 Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"> 
           {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:items-start md:text-start items-center text-center">
              <img src={step.icon} alt={step.title} className="mb-4" />
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>



    </section>
  );
};

export default QAProcess;
