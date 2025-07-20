"use client";
import React, { useEffect } from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";

const SoftwareChoose: React.FC = () => {
  const services = [
    {
      title: "Optimize Business Processes",
      description:
        "Improve efficiency, automate tasks, and reduce manual errors with tailored software solutions.",
    },
    {
      title: "Drive Innovation",
      description:
        "Harness the latest technologies to create innovative products and services that meet customer needs and market demands.",
    },
    {
      title: "Achieve Scalability",
      description:
        "Design software systems that can grow with your business, ensuring long-term success and flexibility.",
    },
    {
      title: "Improve Decision-Making",
      description:
        "Leverage data-driven insights to make informed decisions and optimize operations.",
    },
    {
      title: "Ensure Security & Compliance",
      description:
        "Develop secure systems that adhere to industry standards, ensuring the safety of your business data.",
    },
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
    <section className="bg-[#F7F7F7] px-6 py-10 md:py-20">
      {/* Top Title Section */}
      <div className="max-w-4xl mx-auto text-center md:mb-16">
        <h2 className="text-[30px] md:text-[42px] font-bold text-gray-800 mb-4 font-raleway">
          Why Choose{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">
            Software Consultancy?
          </span>
        </h2>
        <p className="text-gray-600 text-[12px] md:text-[16px] font-raleway ">
          In today’s fast-paced, technology-driven world, businesses need to stay ahead of
          the curve to remain competitive. Our software consultancy services can help you.
        </p>
      </div>

      {/* Bottom Section with Image and List */}
      <div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-0 md:gap-12 md:pl-10"
        data-aos="zoom-out-up"
      >
        {/* Left Image */}
        <div className="flex-shrink-0">
          <img
            src="/images/SoftMask group.svg"
            alt="Software Consultancy"
            className="object-contain w-full h-[90%]"
          />
        </div>

        {/* Right Services */}
        <div className="flex-1 space-y-8 pt-6  max-w-2xl">
          {services.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]  text-2xl font-extrabold font-raleway">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h4 className="text-gray-800 font-bold text-lg font-raleway text-start md:text-[26px]text-[16px] ">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mt-1 md:text-[16px]text-[12px] text-start">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareChoose;
