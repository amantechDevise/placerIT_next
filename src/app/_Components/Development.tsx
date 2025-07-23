
"use client"
import { useEffect } from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";
const Development = () => {
  useEffect(() => {
    const aosConfig: AosOptions = {
      duration: 1000,
      once: true,
      offset: 120,
      easing: "ease-in-out",
    };

    AOS.init(aosConfig);
  }, []);
  const items = [
    {
      img: '/images/Group 144.svg',
      title: (
        <>
          In-Depth Discovery <br /> & Analysis
        </>
      ),
      desc: "We start by understanding your business goals, challenges, and user needs through thorough research and stakeholder engagement to align our strategy with your objectives.",
    },
    {
      img: "/images/Group 141.svg",
      title: (
        <>
          User-Centered <br /> Design
        </>
      ),
      desc: "Our design process focuses on creating intuitive and engaging user experiences. We prioritize usability, accessibility, and aesthetics to ensure that the final product is not only functional but also delightful for users.",
    },
    {
      img: "/images/Group 139.svg",
      title: (
        <>
          Agile Development <br /> Methodology
        </>
      ),
      desc: "We follow an agile development process, allowing for flexibility, quick iterations, and continuous feedback. This ensures the solution is developed efficiently while staying aligned with your evolving needs.",
    },
    {
      img: "/images/Group 142.svg",
      title: (
        <>
          Collaborative & Transparent <br /> Communication
        </>
      ),
      desc: "Throughout the design and development phases, we keep normal conversation with you, making sure transparency and collaboration. We keep you up to date on development and make changes based totally on your input.",
    },
    {
      img: "/images/Group 140.svg",
      title: (
        <>
          Quality Assurance <br /> & Testing
        </>
      ),
      desc: "We conduct complete checking out at each stage of improvement to make certain that the remaining product is secure, free, and performs at the perfect standards. Our QA method ensures your answer is dependable and scalable.",
    },
    {
      img: "/images/Group 143.svg",
      title: (
        <>
          Launch & <br /> Ongoing Support
        </>
      ),
      desc: "After launch, we provide continuous monitoring, maintenance, and support to ensure your solution remains optimal. re-committed to making necessary updates and enhancements as your business grows.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header and Image */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 md:gap-10 mb-12">
        <div className="max-w-xl" data-aos="zoom-in-down">
          <h2 className="text-[30px] lg:text-[20px] md:text-[36px] xl:text-[56px] font-raleway font-extrabold text-gray-900 mb-2 leading-tight md:text-start">
            Our Design and <br /> Develop
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]"> Approach</span>
          </h2>
          <p className="md:text-[16px] text-[12px] text-gray-500 md:text-start font-raleway">
            At PlacerIT, we follow a streamlined, focused approach to design and development that ensures every project is executed with precision and innovation. s how we approach each project:
          </p>
        </div>
        <div className="flex-shrink-0 w-full max-w-md " data-aos="zoom-in-down">
          <img src="/images/Group 150.svg" alt="Development Illustration" className="w-full" />
        </div>
      </div>

      {/* Grid of items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map(({ img, title, desc }, idx) => (
          <div
            key={idx}
            className="flex border border-blue-300 rounded-lg p-6 gap-4 hover:shadow-md transition-shadow bg-white"
            data-aos="fade-up"
          >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-md">
              <img src={img} alt="Icon" className="" />
            </div>
            <div>
              <h3 className="font-raleway font-extrabold text-gray-900 md:text-[20px] text-[16px] leading-snug text-start">
                {title}
              </h3>
              <p className="font-raleway font-medium text-gray-500  mt-1 md:text-[16px] text-[12px] text-start">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Development;
