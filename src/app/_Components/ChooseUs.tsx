"use client"
import React, { useEffect } from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";

const ChooseUs = () => {
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
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start gap-12 max-w-7xl">

                <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-center" data-aos="fade-right">
                    <h2 className="text-[42px] font-extrabold text-Raleway mb-4 text-center lg:text-center">
                        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] font-raleway">Choose Us</span>
                    </h2>
                    <img src="/images/Group 225.svg" alt="Why Choose Us" className="w-[60%] max-w-md" />
                </div>

                <div className="w-full lg:w-[60%]">
                    <p className="text-gray-700 mb-8 text-[16px] text-raleway font-normal-400 text-start">
                       Passionate IT professionals, developers, strategists, and designers committed to provide straightforward, efficient IT solutions for challenging problems abound at PlacerIT. Our dedication to quality and client satisfaction has helped us to be a reliable partner to companies of all kinds in all spheres.
                    </p>
                    <hr className="my-6 border-t-1 border-gray-300 w-full" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-start">
                            <h4 className="font-bold text-[18px] text-raleway  mb-2">Expertise</h4>
                            <p className="text-gray-600  text-[16px] text-raleway font-normal-400">
                              Our group consists of pro experts with good-sized rides throughout several industries and technological know-how stacks.
                            </p>
                        </div>
                        <div className="text-start">
                            <h4 className="font-bold text-[18px] mb-2 text-raleway">Innovation</h4>
                            <p className="text-gray-600 text-[16px] text-raleway font-normal-400">
                              We remain in advance of the curve with the aid of consistently exploring modern-day technological tendencies and enforcing them to resolve your challenges.
                            </p>
                        </div>
                        <div className="text-start">
                            <h4 className="font-bold text-[18px] text-raleway mb-2">Customer-Centric Approach</h4>
                            <p className="text-gray-600  text-[16px]">
                               We put our consumers first and are dedicated to handing over incredible providers and support, making sure your enterprise stays ahead of the competition.
                            </p>
                        </div>
                        <div className="text-start">
                            <h4 className="font-bold text-[18px] mb-2  text-raleway">Proven Track Record</h4>
                            <p className="text-gray-600 text-[16px] text-raleway font-normal-400">
                                Our profitable initiatives and long-term partnerships with purchasers stand as a testament to our capability to supply on promises.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default ChooseUs;
