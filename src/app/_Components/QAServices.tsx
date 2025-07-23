"use client"
import React, { useEffect } from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";
const QAServices = () => {
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
        <section className="py-16 px-4 bg-white text-gray-800">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="md:text-[42px] text-[30px] font-extrabold mb-4 font-raleway">
                    Our <span className="bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] bg-clip-text text-transparent">QA Services</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12 font-raleway">
                    We offer a comprehensive range of QA services tailored to your project needs. Our services include:
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
                                    <h3 className="md:text-[22px] text-[18px] font-semibold text-raleway">
                                        {service.title}
                                    </h3>
                                    <p className="md:text-[16px] text-[12px] text-gray-600 font-normal text-raleway mt-1">
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
        title: "Manual Testing",
        description:
            "Manual testing is a hands-on method used by our QA professionals to ensure that the software satisfies high criteria by means of a hands-on approach from the standpoint of a user.",
    },
    {
        title: "Functional Testing",
        description:
            "Our staff evaluates your product’s functionality to guarantee that all features operate as expected and that the software runs under many conditions.",
    },
    {
        title: "Security Testing",
        description:
            "Any software product depends on security to be functional. Our professionals find and remove security vulnerabilities by means of vulnerability analyses and penetration testing.",
    },
    {
        title: "Automated Testing",
        description:
            "We use cutting-edge testing tools and frameworks to automate tedious chores, increase test coverage, and provide faster results, therefore guaranteeing speedier time-to–market.",
    },
    {
        title: "Performance Testing",
        description:
            "To guarantee scalability and responsiveness, we run your application under varied circumstances, heavy load, and stress.",
    },
    {
        title: "Usability Testing",
        description:
            "We concentrate on the user experience of the product, so verifying that it offers a flawless interface for your clients.",
    },
];

export default QAServices;
