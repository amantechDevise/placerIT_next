"use client"
import React,{useEffect} from "react";
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
               <h2 className="text-[40px] font-extrabold mb-4">
  Our <span className="bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] bg-clip-text text-transparent">QA Services</span>
</h2> 
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
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
                                    <h3 className="text-[22px] font-semibold text-raleway">
                                        {service.title}
                                    </h3>
                                    <p className="text-[16px] text-gray-600 font-normal text-raleway mt-1">
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
            "Manual testing involves a hands-on approach where our QA experts test the software from a user’s perspective, ensuring functionality, usability, and performance meet high standards.",
    },
    {
        title: "Functional Testing",
        description:
            "Our team tests the functionality of your product to ensure all features work as intended and that the software performs correctly under different scenarios.",
    },
    {
        title: "Security Testing",
        description:
            "Security is critical for any software product. Our experts conduct vulnerability assessments and penetration testing to identify and eliminate security risks.",
    },
    {
        title: "Automated Testing",
        description:
            "We utilize advanced testing frameworks and tools to automate repetitive tasks, improve test coverage, and deliver faster results, ensuring quicker time-to-market.",
    },
    {
        title: "Performance Testing",
        description:
            "We evaluate how your application performs under stress, heavy load, and varying conditions to ensure scalability and responsiveness.",
    },
    {
        title: "Usability Testing",
        description:
            "We focus on the user experience, testing the product's ease of use and ensuring it provides a seamless interface for your customers.",
    },
];

export default QAServices;
