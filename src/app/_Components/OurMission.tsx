"use client"
import React, { useEffect } from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";

const OurMission: React.FC = () => {
  useEffect(() => {
    const aosConfig: AosOptions = {
      duration: 1000,
      once: true,
      offset: 120,
      easing: "ease-in-out",
    };

    AOS.init(aosConfig);
  }, []);

  return (
    <section
      className="bg-cover bg-no-repeat py-16 px-4 text-center"
      style={{ backgroundImage: `url(/images/bg-h4-21.svg)` }}
    >
      <h2
        className="text-[30px] md:text-[42px] font-extrabold mb-4 font-raleway"
        data-aos="fade-up"
      >
        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">Mission</span>
      </h2>

      <p
        className="max-w-3xl mx-auto text-gray-600 mb-12 text-[12px] md:text-[16px] font-raleway"
        data-aos="fade-up"
        data-aos-delay="100"
      >
     Our reason is to allow agencies to use technological know-how to get the place they want. Working with our clients, we become aware
of commercial enterprise wants and provide custom-made IT options improving operations, expanding efficiency, and providing long-lasting value.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-start">
        {/* Card 1 */}
        <div
          className="bg-white rounded-2xl p-6 w-full md:w-[380px] text-left"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            minHeight: "360px",
            boxShadow:
              "-4px -4px 8px rgba(0,0,0,0.05), -4px 4px 8px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05)",
          }}
        >
          <img
            src="/images/Group 196.svg"
            alt="Custom Software Development"
            className="w-[100px] mt-10"
          />
          <h3 className="text-[22px] font-bold mt-2 font-raleway">
            Custom Software Development
          </h3>
          <p className="text-sm text-gray-600 mt-2 font-raleway">
           customized tools meant to fit your particular company needs.
          </p>
        </div>

        {/* Card 2 (center, with image background) */}
        <div
          className="relative w-full md:w-[380px] text-left overflow-hidden mt-[-25px] rounded-3xl"
          data-aos="fade-up"
          data-aos-delay="300"
          style={{ height: "410px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center rounded-3xl"
            style={{
              backgroundImage: `url(/images/Group-199.svg)`,
              zIndex: 0,
            }}
          ></div>

          <div className="relative text-white h-full flex flex-col items-start justify-center z-10 px-8">
            <img
              src="/images/Group 197.svg"
              alt="Cloud Services"
              className="w-[100px] object-contain"
            />
            <h3 className="text-[22px] font-bold mt-4 mb-2 font-raleway">
              Cloud Services
            </h3>
            <p className="text-sm font-raleway">
              Scalable cloud service, hosting, and management to guarantee flawless and safe operation of your company.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white rounded-2xl p-6 w-full md:w-[380px] text-left"
          data-aos="fade-up"
          data-aos-delay="400"
          style={{
            minHeight: "360px",
            boxShadow:
              "4px -4px 8px rgba(0,0,0,0.05), 4px 4px 8px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05)",
          }}
        >
          <img
            src="/images/Group 198.svg"
            alt="Cybersecurity Solutions"
            className="w-[100px] mt-10"
          />
          <h3 className="text-[22px] font-bold mt-2 font-raleway">
            Cybersecurity Solutions
          </h3>
          <p className="text-sm text-gray-600 mt-2 font-raleway">
            Modern security technologies help you to protect your digital resources against changing cyber risks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
