import React from "react";

const ExperienceTogether = () => {
  return (
    <section className="relative bg-white px-4 py-8 md:py-14 overflow-hidden">
 
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side - Image & Logo */}
        <div className="w-full lg:w-2xl text-center lg:text-left">

          <h2 className="text-3xl sm:text-3xl md:text-[42px] font-extrabold text-gray-900 mb-4 font-raleway">
            Let’s Design an Exceptional
            <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">User Experience Together!</span>
          </h2>
          <p className="text-gray-600 text-base md:text-[16px] leading-relaxed font-raleway  font-normal">
         Whether you’re designing a new product or enhancing an existing one, our team is ready to deliver intuitive and visually striking <span className="font-bold">UI/UX designs</span>  that will help your business thrive. Get in touch with us today for a free consultation, and let’s start creating the perfect user experience for your audience!</p>
        </div>

        {/* Right Side - Text Content */}
      
          <div className="relative w-full lg:w-1/2">
          <div className="relative z-10">
            <img
              src="/images/imageUI.svg"
              alt="Team of professionals"
              className="rounded-lg  w-full h-auto  "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceTogether;
