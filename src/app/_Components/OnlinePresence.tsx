import React from "react";

const OnlinePresence = () => {
  return (
    <section className="relative bg-[#F1F6FF] px-4 py-12 md:py-20 lg:py-24 overflow-hidden">
 
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side - Image & Logo */}
            <div className="relative w-full lg:w-1/2">
          <div className="relative z-10">
            <img
              src="/images/Digiimage.svg"
              alt="Team of professionals"
              className="rounded-lg  w-full h-auto  "
            />
          </div>

        </div>
    

        {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 mb-4 font-raleway">
             Ready to Take Your <br /> Online
         
           

             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">Presence to the <br />
Next Level?</span>
          </h2>
          <p className="text-gray-600 text-base md:text-[16px] leading-relaxed font-raleway  font-normal">
         Whether you’re looking to launch a new website or revamp an existing one, our expert team is here to help. Get in touch with us today for a free consultation, and let’s bring your vision to life!

          </p>
        </div>
      
      </div>
    </section>
  );
};

export default OnlinePresence;
