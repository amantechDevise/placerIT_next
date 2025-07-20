"use client";

import React, { useState } from "react";

const services = [
  {
    title: "Software Architecture & Design",
    description:
      "Our consultants help design robust, scalable, and efficient software architectures that ensure your solutions are future-proof. We align technology choices with your business objectives to create a solid foundation for growth.",
    icon: "/images/Group 376.png"
  },
  {
    title: "Custom Software Development",
    description:
      "We provide end-to-end custom software development services to build solutions tailored to your unique business challenges. From ideation to deployment, our experts guide you through the entire process.",
    icon: "/images/Group 442.png"
  },
  {
    title: "Technology Roadmap Development",
    description:
      "Our consultants collaborate with your team to develop a strategic technology roadmap, identifying the best tools and frameworks to achieve your long-term goals. This helps in minimizing risks while maximizing efficiency.",
    icon: "/images/Group 449.png"
  },
  {
    title: "Cloud Strategy & Migration",
    description:
      "Transition to the cloud with ease. We help you design cloud-based solutions and migrate your systems to cloud platforms such as AWS, Microsoft Azure, or Google Cloud. Our focus is on scalability, cost-efficiency, and security.",
    icon: "/images/Group 450.png"
  },
  {
    title: "Digital Transformation Strategy",
    description:
      "We guide businesses through the digital transformation process, helping them modernize legacy systems and integrate new technologies to enhance operations, customer experiences, and overall efficiency.",
    icon: "/images/Group 451.png"
  },
  {
    title: "Agile & DevOps Consulting",
    description:
      "Adopt Agile methodologies and DevOps practices to improve collaboration, accelerate delivery, and ensure continuous improvement in software development. We help you implement the right practices for faster time-to-market.",
    icon: "/images/Group 452.png"
  },
  {
    title: "IT System Integration",
    description:
      "Integrate disparate systems and applications to improve communication, data flow, and overall system efficiency. Our experts ensure that your IT infrastructure works cohesively to meet business needs.",
    icon: "/images/Group 453.png"
  },
  {
    title: "Software Testing & Quality Assurance",
    description:
      "Our consultants ensure that the software developed is of the highest quality. From functional testing to performance evaluation, we help optimize software performance, security, and user experience.",
    icon: "/images/Group 454.png"
  },
];

const SoftServices: React.FC = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-white px-6 py-10 md:py-20">
      {/* Header */}
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h2 className="text-[30px] md:text-[40px] font-extrabold text-gray-800 mb-4 font-raleway">
          Our <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">Software Consultancy Services</span>
        </h2>
        <p className="text-gray-600 text-[16px] font-raleway">
          We offer a wide range of software consultancy services to meet your
          needs at every stage of the software lifecycle.
        </p>
      </div>

      {/* Tabs + Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-xl overflow-hidden  border border-gray-300 ">
        {/* Left Tab List */}
        <div className="w-full md:w-[40%] bg-gradient-to-b from-[#5D3DAF] to-[#5598F7] text-white p-6 space-y-4">
          {services.map((service, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`w-full text-left px-4 py-3 rounded-md font-semibold transition duration-300 ${selected === idx
                ? "text-black "
                : "hover:bg-white hover:text-black"
                }`}
            >
              {idx + 1}. {service.title}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[60%] p-8 flex flex-col justify-center md:text-start text-center">
          <div className="text-4xl text-[#6D70F5]">
            <img src={services[selected].icon} alt="" />
          </div>
          <div className="flex md:items-center gap-4 mb-4">


            <h3 className="text-[20px] md:text-[30px] font-bold text-gray-800 font-raleway">
              {services[selected].title}
            </h3>
          </div>
          <p className="text-gray-700 text-[12px] md:text-[16px] leading-relaxed">
            {services[selected].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SoftServices;
