"use client";

import React, { useState } from "react";

const services = [
  {
    title: "Software Architecture & Design",
    description:
      "Our experts develop strong, scalable, and efficient software systems that guarantee your solutions are future-proof. We match technological decisions to your company goals to provide a strong basis for expansion.",
    icon: "/images/Group 376.png"
  },
  {
    title: "Custom Software Development",
    description:
      "Our end-to- end custom software development services create solutions to fit your particular company needs. Our professionals walk you through the whole process from conception to execution.",
    icon: "/images/Group 442.png"
  },
  {
    title: "Technology Roadmap Development",
    description:
      "Working with your team, our experts create a strategic technology roadmap finding the appropriate tools and frameworks to reach your long-term objectives. This reduces hazards and increases efficiency by means of maximum control.",
    icon: "/images/Group 449.png"
  },
  {
    title: "Cloud Strategy & Migration",
    description:
      "Easy shift to the cloud. We assist in your design of cloud-based solutions and system migration to AWS, Microsoft Azure, or Google Cloud. Security, economy, and scalability define our priorities.",
    icon: "/images/Group 450.png"
  },
  {
    title: "Digital Transformation Strategy",
    description:
      "We assist companies upgrade historical systems and mix new technologies to improve operations, customer experiences, and general efficiency as they negotiate the digital transformation process.",
    icon: "/images/Group 451.png"
  },
  {
    title: "Agile & DevOps Consulting",
    description:
      "Using Agile approaches and DevOps techniques can help to guarantee ongoing software development improvement, speed delivery, and enhance teamwork. We assist you in putting correct techniques for speedier time-to----market into use.",
    icon: "/images/Group 452.png"
  },
  {
    title: "IT System Integration",
    description:
      "Combine several systems and applications to increase general system efficiency, data flow, and communication quality. Our professionals make sure your IT setup cooperatively satisfies corporate needs.",
    icon: "/images/Group 453.png"
  },
  {
    title: "Software Testing & Quality Assurance",
    description:
      "Our consultants guarantee the best quality of the created software. From performance assessment to functional testing, we assist to maximize user experience, security, and software performance.",
    icon: "/images/Group 454.png"
  },
];

const SoftServices: React.FC = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-white px-6 py-8 md:py-14">
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
       <div className="w-full md:w-[60%] p-8 flex flex-col justify-center md:text-start text-center mx-auto md:mx-0">
  <div className="text-4xl text-[#6D70F5]">
    <img src={services[selected].icon} alt="" />
  </div>
  <div className="flex items-center gap-4 mb-4">
    <h3 className="text-[20px] md:text-[30px] font-bold text-gray-800 font-raleway">
      {services[selected].title}
    </h3>
  </div>
  <p className="text-gray-700 text-[12px] md:text-[16px] leading-relaxed text-start font-raleway">
    {services[selected].description}
  </p>
</div>

      </div>
    </section>
  );
};

export default SoftServices;
