"use client";

import React, { useEffect } from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: (
      <>
        Why
        <br />
        <span className="bg-gradient-to-r from-[#5D3DAF] to-[#5598F7] bg-clip-text text-transparent">
          Choose Us?
        </span>
      </>
    ),
    description:
      "Our approach to software consultancy is focused on collaboration, transparency, and  delivering real value to your business. Here’s how we work.",
  },
  {
    title: "Results-Driven Approach",
    description:
      "Secure financial transactions, automate processes, and offer decentralized finance solutions (DeFi) to reduce dependency on traditional intermediaries.",
    icon: "/images/Group 361.svg",
  },
  {
    title: "Experienced Team",
    description:
      "Our digital marketing experts have years of experience in helping businesses like yours grow online.",
    icon: "/images/Group 362.svg",
  },
  {
    title: "Customized Strategies",
    description:
      "We understand that every business is unique. That’s why we offer personalized strategies tailored to your specific needs.",
    icon: "/images/Group 363.svg",
  },
  {
    title: "Transparent Reporting",
    description:
      "We provide clear, detailed reports so you can see exactly how your campaigns are performing",
    icon: "/images/Group 364.svg",
  },
  {
    title: "Cutting-Edge Tools",
    description:
      "We use the latest technology and industry tools to ensure your business stays ahead of the competition",
    icon: "/images/Group 365.svg",
  },
];

export default function DigitalChoose() {
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
    <div className="min-h-screen text-white px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white text-gray-800 rounded-3xl p-6 transition-shadow duration-400 ${index !== 0 ? "border-1 border-[#CDCDCD]" : ""
                }`}
            >
              <div className="text-3xl mb-3">
                {service.icon && <img src={service.icon} alt="icon" />}
              </div>
              <h3
                className={` mb-2 md:text-start text-center ${index === 0
                    ? "md:text-[57px] text-[32px] mt-[-40px]  font-extrabold"
                    : "md:text-[22px] text-[16px] font-semibold"
                  }`}
              >
                {service.title}
              </h3>
              <p className="md:text-[16px] text-[12px] md:text-start text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
