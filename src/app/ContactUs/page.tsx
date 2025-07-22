import React from "react";
import Contact_Us from "../_Components/ContactUs";
import Layout from "../_common/Layout";
import Faq from "../_Components/Fqa";

function ContactUs() {
  return (
    <Layout>
    <main className="relative w-full h-full">
      <div className="relative w-full h-[400px] md:h-[550px] pt-[120px] overflow-hidden">
        {/* Background Video */}
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
            Contact Us
          </h1>

          <p className="text-gray-300 text-base md:text-lg lg:text-[16px]  md:mb-44  mb-25 max-w-5xl leading-relaxed">
            Have any questions? We’d love to hear from you.
          </p>
        </div>

        <div className="absolute bottom-[-44px] 2xl:bottom-[-222px] xl:bottom-[-155px] lg:bottom-[-133px] md:bottom-[-105px] left-0 w-full z-10">
          <img src="/images/Shape_4_.svg" alt="" className="w-full object-cover" />
        </div>
      </div>

      <div className="bg-white py-10">
        <Contact_Us showBorder={true} />
      </div>
       <Faq />
    </main>
    </Layout>
  );
}

export default ContactUs;
