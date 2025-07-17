
 "use client";
import React ,{useEffect} from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";
const SocialMedia: React.FC = () => {
  const services = [
      <>
    Platform-specific strategy (Facebook, Instagram, <br /> Twitter, LinkedIn, etc.)
  </>,
    "Content creation and management",
    "Paid social campaigns",
    "Community engagement and growth",
    "Analytics and performance tracking",
  ];
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
    <section className="bg-[#f3f7ff] px-6  py-10">
      <div className="max-w-5xl mx-auto text-center mb-16">
       

        <h2 className="text-2xl md:text-[42px] font-bold text-gray-800 mb-4 font-raleway">
         Social Media 
           <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">
            Marketing
          </span>{" "}
        </h2> 

        <p className="text-gray-600 text-[16px] font-raleway max-w-5xl mx-auto">
         Build a strong social presence that boosts engagement and drives traffic. We craft strategies tailored to your brand’s voice, helping you foster meaningful connections with your audience. Our social media services include:
        </p>
      </div>

      {/* Bottom section with left image and right services */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12" data-aos="zoom-out-up">
        {/* Left big image */}
        <div className="flex-shrink-0">
          <img
            src="/images/SocalMask group.svg"
            alt="SEO Expert"
            width={330}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Right side services */}
        <div className="flex-1 grid gap-6">
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
    </section>
  );
};

export default SocialMedia;
