import Image from "next/image";
import React from "react";

const SeoServices: React.FC = () => {
  const services = [
    "Comprehensive keyword research",
    "On-page optimization (meta tags, content, structure)",
    "High-quality link building",
    "Regular performance analysis & reporting",
    "Local SEO for regional businesses",
  ];

  return (
    <section className="bg-[#f3f7ff] px-6 pb-10 md:pb-0 md:pt-15 relative">
      {/* Vertical "Our Services" text */}
      <div className="absolute md:top-[60%] md:right-0 right-[35px] transform -translate-y-1/2 rotate-[-90deg] z-10 hidden md:block">
        {/* Hide vertical text on small screens */}
        <p className="text-[#DBDBDB] md:text-[50px] text-raleway font-uppercase">
          O&nbsp;u&nbsp;r&nbsp;&nbsp;S&nbsp;e&nbsp;r&nbsp;v&nbsp;i&nbsp;c&nbsp;e&nbsp;s
        </p>
      </div>

      {/* SEO Icon with bounce animation */}
      <div className="w-[100px] mb-6 text-center left-0 md:left-10 lg:left-30 xl:left-60 absolute z-10 animate-[bounce_4s_infinite]">
        <Image
          src="/images/seoIcon.svg"
          alt="SEO Icon"
          width={100}
          height={100}
          className="w-[100px] h-[100px] object-contain"
        />
      </div>

      {/* Heading and description */}
      <div className="max-w-5xl mx-auto text-center md:mb-16 mt-5">
        <h2 className="text-2xl md:text-[42px] font-bold text-gray-800 mb-4 font-raleway">
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">
            Search Engine
          </span>{" "}
          Optimization
        </h2>

        <p className="text-gray-600 text-[16px] font-raleway max-w-5xl mx-auto">
          Rank higher on search engines like Google and drive organic traffic
          to your website with our powerful SEO strategies. We ensure that your
          business gets found by the right people at the right time. Our
          approach includes:
        </p>
      </div>

      {/* Bottom section */}
      <div className="max-w-6xl mx-auto relative flex flex-col items-start md:gap-12 md:flex-row md:items-start">
        {/* Left big image */}
        <div className="w-full md:w-auto flex-shrink-0">
          <Image
            src="/images/ScoImage.svg"
            alt="SEO Expert"
            width={400}
            height={400}
            className="object-contain w-full md:w-auto"
          />
        </div>

        {/* Services list below image on small screens */}
        <div className="w-full md:hidden mt-6 flex flex-col gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg py-5 px-8 text-left font-bold text-lg text-gray-700 font-raleway"
            >
              {service}
            </div>
          ))}
        </div>

        {/* Services list absolutely positioned on right on md+ screens */}
        <div className="hidden md:block absolute md:top-[40%] md:right-0 right-[35px] transform -translate-y-1/2 z-10 w-[700px]">
          <div className="flex flex-col gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg py-5 px-8 text-left font-bold text-lg text-gray-700 font-raleway"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoServices;
