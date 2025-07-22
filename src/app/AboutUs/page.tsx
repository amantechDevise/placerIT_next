"use client";

import Layout from "../_common/Layout";
import ChooseUs from "../_Components/ChooseUs";
import ITprofessionals from "../_Components/ITprofessionals";
import OurMission from "../_Components/OurMission";
import OurValues from "../_Components/OurValues";

const AboutUs = () => {
  return (
    <Layout>
      <main className="relative w-full h-full">
        <div className="relative w-full h-[400px] md:h-[550px] pt-[120px] overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            src="/videos/Homecustom.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="absolute inset-0 bg-[#1B1140] opacity-[0.72]"></div>

          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl md:text-[73px]  font-semibold font-Raleway text-white leading-tight ">
              About Us
            </h1>



            <p className="text-gray-300 text-[12px] lg:text-[16px]  md:mb-44  mb-25 max-w-5xl leading-relaxed">
              Welcome to PlacerIT, a leading provider of innovative IT solutions. Founded with the vision to empower businesses and organizations through technology, we specialize in delivering cutting-edge solutions that drive growth, efficiency, and transformation.
            </p>
          </div>
           <div className="absolute bottom-0 left-0 w-full z-10">
                        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
                                className="fill-current text-white"></path>
                        </svg>
                    </div>
        </div>

        <ITprofessionals />
        <div>
          <OurMission />
        </div>
        <div>
          <ChooseUs />
        </div>
        <div>
          <OurValues />
        </div>
      </main>
    </Layout>
  );
};

export default AboutUs;
