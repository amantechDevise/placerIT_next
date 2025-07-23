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
                        Our mission is to help businesses harness the power of technology to achieve their goals.
                        We work closely with our clients to understand their needs and provide tailored IT solutions
                        that drive productivity, improve operations, and create lasting value.
                    </p>
                    <hr className="my-6 border-t-1 border-gray-300 w-full" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-start">
                            <h4 className="font-bold text-[18px] text-raleway  mb-2">Expertise</h4>
                            <p className="text-gray-600  text-[16px] text-raleway font-normal-400">
                                Our team consists of seasoned professionals with vast experience across various industries and technology stacks.
                            </p>
                        </div>
                        <div className="text-start">
                            <h4 className="font-bold text-[18px] mb-2 text-raleway">Innovation</h4>
                            <p className="text-gray-600 text-[16px] text-raleway font-normal-400">
                                We stay ahead of the curve by continuously exploring the latest technological trends and implementing them to solve your challenges.
                            </p>
                        </div>
                        <div className="text-start">
                            <h4 className="font-bold text-[18px] text-raleway mb-2">Customer-Centric Approach</h4>
                            <p className="text-gray-600  text-[16px]">
                                We put our clients first and are committed to delivering exceptional service and support, ensuring your business stays ahead of the competition.
                            </p>
                        </div>
                        <div className="text-start">
                            <h4 className="font-bold text-[18px] mb-2  text-raleway">Proven Track Record</h4>
                            <p className="text-gray-600 text-[16px] text-raleway font-normal-400">
                                Our successful projects and long-term partnerships with clients stand as a testament to our ability to deliver on promises.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default ChooseUs;
