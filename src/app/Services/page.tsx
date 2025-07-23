"use client";

import Layout from "../_common/Layout";
import Contact_Us from "../_Components/ContactUs";
import Faq from "../_Components/Fqa";
import Process from "../_Components/Process";
import Services from "../_Components/Services";

const ServicesPage = () => {
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
                        <h1 className="text-3xl md:text-[73px]  font-semibold font-raleway text-white leading-tight ">
                            Services
                        </h1>



                        <p className="text-gray-300 text-base md:text-lg lg:text-[16px]  md:mb-44  mb-25 max-w-5xl leading-relaxed font-raleway">
                            At PlacerIT Services, we simplify the complex process of software development.
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

                <Services />
                <div
                    className="bg-cover bg-center bg-no-repeat py-20 
             before:absolute before:inset-0 before:bg-gradient-to-r 
             before:from-[#5D3DAF]/90 before:to-[#5598F7]/90 before:z-0 relative"
                    style={{ backgroundImage: `url(/images/contact.svg)` }}
                >
                    <Contact_Us showBorder={false} />
                </div>
                <Process />
                 <Faq />
            </main>
        </Layout>
    );
};

export default ServicesPage;
