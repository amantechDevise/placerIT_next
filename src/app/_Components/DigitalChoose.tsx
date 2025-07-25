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
      "Our method of approaching software consulting is based on openness, teamwork, and providing actual value for your company. We operate like this.",
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
    <div className="min-h-full text-white px-6 py-8 md:py-14 bg-white">
     <div className="max-w-6xl mx-auto">
  <div
    className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    {services.map((service, index) => (
      <div
        key={index}
        className={`bg-white text-gray-800 rounded-3xl p-6 transition-shadow duration-400 ${
          index !== 0 ? "border-1 border-[#CDCDCD]" : ""
        }`}
      >
        {/* Center icon on mobile */}
        <div className="text-3xl mb-3 flex justify-center md:justify-start">
          {service.icon && <img src={service.icon} alt="icon" />}
        </div>

        {/* Responsive heading */}
        <h3
          className={`mb-2 ${
            index === 0
              ? "md:text-start text-center md:text-[57px] text-[32px] mt-[-40px] font-extrabold font-raleway"
              : "md:text-start text-center md:text-[22px] text-[16px] font-semibold font-raleway"
          }`}
        >
          {service.title}
        </h3>

        {/* Responsive description */}
        <p className="md:text-[16px] text-[12px] md:text-start text-center font-raleway">
          {service.description}
        </p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
