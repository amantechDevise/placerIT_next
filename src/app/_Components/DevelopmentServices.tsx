import React from "react";

const DevelopmentServices = () => {
  return (
    <section className="relative bg-white px-4 py-8 md:py-14 overflow-hidden">
  

      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side - Image & Logo */}
         <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className=" font-extrabold text-gray-900 mb-4 font-raleway">

           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] text-3xl sm:text-4xl md:text-[80px]">Website</span><br />
         <p className="text-3xl sm:text-4xl md:text-[42px]"> Development Services</p>  
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-raleway">
            At PlacerIT, we are a passionate team of tech experts, developers,
            strategists, and designers dedicated to solving complex challenges
            with simple and effective IT solutions. Our commitment to excellence
            and customer satisfaction has made us a trusted partner to businesses
            of all sizes, across various industries.
          </p>
        </div>
      

        {/* Right Side - Text Content */}
         <div className="relative w-full lg:w-1/2">
          <div className="relative z-10">
            <img
              src="/images/Group 641.jpg"
              alt="Team of professionals"
              className="rounded-lg  w-full h-auto object-cover "
            />
          </div>

          <img
            src="/images/Group 405.png"
            alt="Company Icon"
            className="absolute md:-top-8 -top-4  md:-left-15 -left-4 w-20 sm:w-[10rem] md:w-30 lg:w-32 h-auto z-20 animate-[spin_6s_linear_infinite]"
            style={{ transformOrigin: "center center" }}
          />
           <img
            src="/images/4674328 1.png"
            alt="Company Icon"
            className="absolute md:-bottom-8 -bottom-4  md:-right-15 -right-4 w-20 sm:w-[10rem] md:w-30 lg:w-32 h-auto z-20 animate-[bounce_3s_infinite]"
            style={{ transformOrigin: "center center" }}
          />
        </div>
      </div>
    </section>
  );
};

export default DevelopmentServices;
