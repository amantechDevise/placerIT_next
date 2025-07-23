"use client";

import React, { useState } from "react";

const services = [
  {
    title: "User Interface (UI) Design",
    description:
      "Crafting visually compelling interfaces that align with your brand and are easy for users to navigate.",
      icon:"/images/Group 455.png"
  },
  {
    title: "User Experience (UX) Design",
    description:
      "Designing seamless user experiences that reduce friction and enhance user satisfaction.",
      icon:"/images/Group 460.png"
  },
  {
    title: "Wireframing & Prototyping",
    description:
      "Structuring your app or website’s flow to ensure smooth interaction and creating interactive prototypes to visualize the user journey.",
      icon:"/images/Group 461.png"
  },
  {
    title: "Usability Testing",
    description:
      "Conducting user testing to gather actionable insights and refine designs for optimal usability and performance.",
      icon:"/images/Group 463.png"
  },
  {
    title: "Interaction Design",
    description:
      "Designing engaging and intuitive interactions that improve the overall user experience.",
      icon:"/images/Group 451.png"
  },
  {
    title: "Mobile App Design",
    description:
      "Specializing in mobile UI/UX design to create intuitive, responsive, and aesthetically pleasing mobile applications.",
      icon:"/images/Group 464.png"
  },
  {
    title: "Mobile App Design",
    description:
      "Specializing in mobile UI/UX design to create intuitive, responsive, and aesthetically pleasing mobile applications.",
      icon:"/images/Group 465.png"
  },
  {
    title: "Web App Design",
    description:
      "Building user-friendly web applications that combine functionality and aesthetics for optimal user engagement.",
      icon:"/images/Group 465.png"
  },
];

const UI_UXServicesInclude: React.FC = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="px-6 py-10 md:py-20" style={{
        backgroundImage: ` url(/images/top_view.svg)`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      {/* Header */}
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-[40px] font-extrabold text-gray-800 mb-4 font-raleway">
          Our UI/UX Design  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">Services Include</span>
        </h2>
    
      </div>

      {/* Tabs + Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-xl overflow-hidden  border border-gray-300 ">
        {/* Left Tab List */}
        <div className="w-full md:w-[40%] bg-gradient-to-b from-[#5D3DAF] to-[#5598F7] text-[#CDCDCD] p-6 space-y-4">
          {services.map((service, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`w-full text-left px-4 py-3 rounded-md font-semibold transition duration-300 ${
                selected === idx
                  ? "text-white text-[#6D70F5] font-raleway "
                  : "hover:text-white font-raleway"
              }`}
            >
              {idx + 1}. {service.title}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[60%] p-8 flex flex-col justify-center md:items-start  items-center md:text-start text-center">
              <div className="text-4xl text-[#6D70F5]">
                <img src={services[selected].icon} alt="" />
            </div>
          <div className="flex md:items-center items-center gap-4 mb-4">
          
        
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-raleway">
              {services[selected].title}
            </h3>
          </div>
          <p className="text-gray-700 text-md md:text-lg leading-relaxed font-raleway">
            {services[selected].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default UI_UXServicesInclude;
