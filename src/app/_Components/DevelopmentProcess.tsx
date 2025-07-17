import React from "react";

const DevelopmentProcess = () => {
  return (
    <section className="relative bg-white px-4 py-12 md:py-20 lg:py-24 overflow-hidden">
  

      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side - Image & Logo */}
         <div className="w-full lg:w-1/2 text-start lg:text-left">
          <h2 className=" font-extrabold text-gray-900 mb-4 font-raleway text-3xl sm:text-4xl md:text-[42px]">
 

          Our Website<br />
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] ">Development Process</span>
          </h2>
          <p className="text-gray-600 text-base md:text-[16px] leading-relaxed font-raleway">
           <span className=" font-bold"> Discovery & Planning</span> : We start by understanding your business objectives, target audience, and design preferences to create a clear plan.
          </p><br />
          <p className="text-gray-600 text-base md:text-[16px] leading-relaxed font-raleway">
           <span className=" font-bold"> Design</span> : Our designers craft mockups and wireframes, ensuring the site is visually appealing and easy to navigate.
          </p>
          <br />
          <p className="text-gray-600 text-base md:text-[16px] leading-relaxed font-raleway">
           <span className=" font-bold">Development</span>: Our developers turn the designs into a fully functional website, using the latest technologies and best practices.
          </p>
          <br />
          <p className="text-gray-600 text-base md:text-[16px] leading-relaxed font-raleway">
           <span className=" font-bold">Testing</span> : Rigorous testing ensures your site is bug-free, optimized for speed, and performs well across all devices.
          </p>
          <br />
          <p className="text-gray-600 text-base md:text-[16px] leading-relaxed font-raleway">
           <span className=" font-bold"> Launch & Support</span>: We launch your website and provide ongoing support to ensure everything runs smoothly post-launch.
          </p>
        </div>
      

        {/* Right Side - Text Content */}
         <div className="relative w-full lg:w-1/2">
          <div className="relative z-10">
            <img
              src="/images/Group 643.svg"
              alt="Team of professionals"
              className="rounded-lg  w-full h-auto object-cover "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
