"use client";
import React, { useEffect } from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";
const Advertising: React.FC = () => {
  const services = [
    "Google Ads Campaign Management",
    "Social Media Advertising (Facebook, Instagram, LinkedIn)",
    "Conversion optimization",
    "In-depth reporting and analytics",
    "Remarketing strategies",
  ];

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
    <section className="bg-white px-6 py-12 md:py-20">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center mb-4 md:mb-16">
        <h2 className="text-[30px] md:text-[42px] font-bold text-gray-800 mb-4 font-raleway">
          Pay-Per-Click{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">
            Advertising
          </span>
        </h2>
        <p className="text-gray-600 text-[12px] md:text-[16px] font-raleway max-w-3xl mx-auto">
          Maximize your ROI with expertly managed PPC campaigns. Our team
          leverages Google Ads, Bing Ads, and social media platforms to ensure
          your ads reach the most relevant audience, when it matters most. Our
          PPC services include:
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start gap-4 md:gap-12 " data-aos="zoom-in-down">

        <div className="flex-1 grid gap-6 w-full max-w-2xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg py-5 px-6 text-left font-bold text-lg text-gray-700 font-raleway border border-gray-200"
            >
              {service}
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="flex-shrink-0 md:w-[320px] md:h-[100px] relative">
          <img
            src="/images/AddMask group.jpg"
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Advertising;
