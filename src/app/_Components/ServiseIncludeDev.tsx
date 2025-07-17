import React from "react";

const ServiseIncludeDev = () => {
  return (
    <section className="relative bg-[#F1F6FF] px-4 py-12 md:py-20 lg:py-24 overflow-hidden">
  

      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side - Image & Logo */}
             <div className="relative w-full lg:w-1/2">
          <div className="relative z-10">
            <img
              src="/images/Group 642.svg"
              alt="Team of professionals"
              className="rounded-lg  w-full h-auto object-cover "
            />
          </div>

        </div>
       
      

        {/* Right Side - Text Content */}
      <div className="w-full lg:w-1/2 text-start lg:text-left">
          <h2 className=" font-extrabold text-gray-900 mb-4 font-raleway text-3xl sm:text-4xl md:text-[42px]">
 
          Our Website {" "}
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] ">Development  <br />Services Include</span>
          </h2>
          <p className="text-gray-600 text-base md:text-[16px] leading-relaxed font-raleway">
           <span className=" font-bold"> Custom Web Design</span>: Beautiful, bespoke designs that represent your brand identity and captivate your visitors.
          </p><br />
          
          <p className="text-gray-600 text-base md:text-[16px] leading-relaxed font-raleway">
           <span className=" font-bold"> E-commerce Solutions</span>: Whether you’re selling products or services, we build secure, user-friendly e-commerce platforms.
          </p>
          <br />
          <p className="text-gray-600 text-base md:text-[16px] leading-relaxed font-raleway">
           <span className=" font-bold">Content Management Systems</span>: We provide easy-to-use CMS options like WordPress, Drupal, and custom CMS solutions, allowing you to manage your content without any technical know-how.
          </p>
          <br />
          <p className="text-gray-600 text-base md:text-[16px] leading-relaxed font-raleway">
           <span className=" font-bold">Web Applications</span> : From simple interactive features to complex web applications, we build solutions that meet your business needs.
          </p>
          <br />
          <p className="text-gray-600 text-base md:text-[16px] leading-relaxed font-raleway">
           <span className=" font-bold">Landing Pages</span>: Designed to convert visitors into leads, our landing pages are crafted to focus on your key goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiseIncludeDev;
