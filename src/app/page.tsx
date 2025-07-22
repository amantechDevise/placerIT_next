"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Layout from "./_common/Layout";
import Contact_Us from "./_Components/ContactUs";
import Development from "./_Components/Development";
import Fqa from "./_Components/Fqa";
import Process from "./_Components/Process";
import Services from "./_Components/Services";

gsap.registerPlugin(TextPlugin);

function Homepage() {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    document.body.classList.add("overflow-x-hidden", "overflow-y-auto");
    return () => {
      document.body.classList.remove("overflow-x-hidden", "overflow-y-auto");
    };
  }, []);

  useEffect(() => {
    const texts = ["Growth through", "Growth through", "Growth through"];
    const tl = gsap.timeline({ repeat: -1 });

    texts.forEach((fullText) => {
      tl.to(textRef.current, {
        duration: fullText.length * 0.1,
        text: fullText + "|",
        ease: "power1.inOut",
      });
      tl.to({}, { duration: 0.8 });
      tl.to(textRef.current, {
        duration: 0.5,
        text: fullText + " ",
        repeat: 2,
        yoyo: true,
        ease: "power1.inOut",
      });
      for (let i = fullText.length; i >= 0; i--) {
        tl.to(textRef.current, {
          duration: 0.05,
          text: fullText.substring(0, i) + "|",
          ease: "power1.inOut",
        });
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Layout>
      <main className="relative w-full h-full">
      <div className="relative w-full h-[600px] md:h-[750px]  overflow-hidden">
  {/* ✅ Full-screen background video */}
  <video
    className="absolute inset-0 w-full h-full object-cover opacity-90"
    src="/videos/Homecustom.mp4"
    autoPlay
    muted
    loop
    playsInline
  />

  {/* ✅ Overlay layer */}
  <div className="absolute inset-0 bg-[#1B1140] opacity-[0.72]"></div>

  {/* ✅ Content wrapper with max-w-7xl */}
  <div className="relative z-10 h-full flex flex-col justify-center items-start text-left px-4  mx-auto max-w-7xl">
    <h1 className="text-3xl md:text-[73px] font-semibold font-Raleway text-white leading-tight">
      Accelerating
    </h1>

    <h2
      ref={textRef}
      className="text-blue-500 text-3xl md:text-[73px] font-semibold font-Raleway h-[45px] md:h-[60px]"
    />

    <h1 className="text-3xl md:text-[73px] text-white mt-4 font-semibold font-Raleway ">
      Innovation
    </h1>

    <p className="text-gray-300 text-base md:text-lg lg:text-[20px] mt-6 max-w-2xl leading-relaxed">
      Leveraging cutting-edge technologies and creative solutions to drive
      business success. By embracing new ideas and innovative strategies,
      businesses can enhance efficiency, improve operations, and stay
      ahead of the competition.
    </p>
  </div>

  {/* ✅ Bottom shape image */}
   <div className="absolute bottom-0 left-0 w-full z-10">
                        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
                                className="fill-current text-white"></path>
                        </svg>
                    </div>
</div>

        <div>
          <Services />
        </div>
        <div className="bg-[#F7F7F7] py-10">
          <Development />
        </div>
        <div
          className="bg-cover bg-center bg-no-repeat py-20 
             before:absolute before:inset-0 before:bg-gradient-to-r 
             before:from-[#5D3DAF]/90 before:to-[#5598F7]/90 before:z-0 relative"
          style={{ backgroundImage: `url(/images/contact.svg)` }}
        >
          <Contact_Us showBorder={false} />
        </div>
        <Process />

        <div>
          <Fqa />
        </div>
      </main>
    </Layout>
  );
}

export default Homepage;
