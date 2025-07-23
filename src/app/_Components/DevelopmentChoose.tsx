"use client";

import React, { useEffect } from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Tailored Solutions",
    description:
      "We understand that every business is unique. Our team works closely with you to create a website that aligns with your brand, goals, and vision.",
    icon: "/images/Group 323.svg",
  },
  {
    title: "Responsive Design",
    description:
      "With mobile traffic on the rise, we ensure that your website is responsive, meaning it looks great and works seamlessly across all devices.",
    icon: "/images/Group 617.png",
  },
  {
    title: "User-Centric Development",
    description:
      "We prioritize user experience (UX) to make sure that your visitors can easily navigate and engage with your site.",
    icon: "/images/Group 324.svg",
  },
  {
    title: "SEO-Friendly",
    description:
      "Our websites are built with search engine optimization in mind to help you rank higher and reach your target audience effectively.",
    icon: "/images/Group 325.svg",
  },
  {
    title: "Fast Loading Speeds",
    description:
      "Speed matters! We optimize your website for fast loading times, improving the user experience and reducing bounce rates.",
    icon: "/images/Group 618.png",
  },
  {
    title: "Scalable Solutions",
    description:
      "Whether you're a small startup or an established enterprise, we create scalable websites that grow with your business.",
    icon: "/images/Group 326.svg",
  },
];

export default function DevelopmentChoose() {
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
    <div className="relative min-h-screen text-black px-6 py-12 md:pt-40 bg-[#F7F7F7] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="font-extrabold text-gray-900 mb-12 font-raleway text-[30px] md:text-[42px] md:text-left text-center">
          Why{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">
            Choose Us?
          </span>
        </h2>

        {/* Service Cards */}
       <div
  className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center "
  data-aos="fade-up"
  data-aos-duration="1000"
>
  {services.map((service, index) => (
    <div
      key={index}
      className="bg-white text-gray-800 rounded-3xl p-6 shadow-xl duration-400 w-full sm:max-w-md mx-auto"
    >
      <div className="text-3xl mb-3 text-center md:text-start">
  {service.icon && (
    <img src={service.icon} alt={service.title} className="inline-block" />
  )}
</div>
      <h3 className="font-extrabold mb-2 text-center md:text-start md:text-[22px] text-[16px]">
        {service.title}
      </h3>
      <p className="md:text-[16px] text-[12px] text-center md:text-start">
        {service.description}
      </p>
    </div>
  ))}
</div>

      </div>

      {/* Background Image on Right */}
      <img
        src="/images/4332393_18941 1.svg"
        alt="Decorative Background"
        className="absolute md:-top-5 md:left-180 lg:left-190 xl:left-210 2xl:left-270 w-[400px] md:w-[480px] lg:w-[520px] opacity-90 z-0 pointer-events-none select-none"
      />
    </div>

  );
}
