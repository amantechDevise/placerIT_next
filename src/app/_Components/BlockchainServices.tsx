"use client"
import React,{useEffect} from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";
const BlockchainServices = () => {
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
        <section className="py-8 md:py-14 px-4 bg-white text-gray-800">
            <div className="max-w-7xl mx-auto text-center">
               <h2 className="md:text-[40px] text-[30px] font-extrabold mb-4">
  Our <span className="bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] bg-clip-text text-transparent">Blockchain Services</span>
</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12 md:text-[16px] text-[12px]">
                    We provide a large spectrum of blockchain development and consulting services catered to your particular requirements. We
have the knowledge to help you create decentralized apps, apply smart contracts, or include blockchain into your current systems.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto " data-aos="zoom-in-down">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex items-center p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition duration-300"
                        >

                            <div className="flex flex-row items-start text-start">
                                {/* Left side image */}
                                <div className="w-8 h-8 flex-shrink-0 mr-4">
                                    <img
                                        src="images/Group 331.png"
                                        alt=""
                                        className="max-h-full max-w-full"
                                    />
                                </div>

                                {/* Right side content */}
                                <div>
                                    <h3 className="md:text-[22px]  text:[16px] font-semibold text-raleway">
                                        {service.title}
                                    </h3>
                                    <p className="md:text-[16px]  text-[12px] text-gray-600 font-normal text-raleway mt-1">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                        </div>


                    ))}
                </div>

               <button
  className="mt-10 px-6 py-2 text-white bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] hover:opacity-90 rounded-md text-sm font-medium"
>
  Load More
</button>
            </div>
        </section>
    );
};

const services = [
    {
        title: "Blockchain Development",
        description:
            "Our team of blockchain developers specializes in creating custom blockchain solutions that meet your business requirements. From creating new blockchain networks to building decentralized applications (DApps), we provide end-to-end services.",
    },
    {
        title: "Smart Contract Development",
        description:
            "We help you design, develop, and deploy secure, self-executing contracts that automate transactions and business processes. Our smart contracts run on popular blockchain platforms like Ethereum, Hyperledger, and Binance Smart Chain.",
    },
    {
        title: "Private Blockchain Solutions",
        description:
            "If you require a more controlled environment, we build private and permissioned blockchains that offer enhanced privacy and scalability while ensuring the benefits of decentralization.",
    },
    {
        title: "Blockchain Consulting",
        description:
            "Our blockchain consultants work closely with your business to evaluate how blockchain can transform your operations. We help you define a clear strategy, choose the right blockchain platform, and identify use cases that bring the most value.",
    },
    {
        title: "Blockchain Integration",
        description:
            "We integrate blockchain technology into your existing systems, providing seamless solutions that ensure interoperability with your current infrastructure.",
    },
    {
        title: "Cryptocurrency & Token Development",
        description:
            "Whether you're launching a new cryptocurrency or creating a token for a specific purpose, our team assists with the entire process, including token creation, ICO/IEO setup, and listing on exchanges.",
    },
];

export default BlockchainServices;
