"use client"
import React, { useEffect } from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";
export default function TechGapPage() {
    const services = [
        { icon: '/images/microchip-icon 1.png', title: 'Artificial Intelligence' },
        { icon: '/images/setting-icon 1.png', title: 'IT Operations' },
        { icon: '/images/Vector.png', title: 'Cloud' },
        { icon: '/images/programmer-computer-icon1.png', title: 'Software Development' },
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

        <div className="min-h-full bg-white text-gray-800 py-12 px-6 md:px-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center" data-aos="fade-up"
            >

                {/* Left Side */}
               <div>
    <h1 className="md:text-[67px] text-[40px] font-extrabold font-raleway md:text-start text-center">
        Filling the Tech
    </h1>

    <h1 className="md:text-[42px] text-[30px] font-extrabold font-raleway md:text-start text-center bg-gradient-to-r from-[#5D3DAF] to-[#5598F7] bg-clip-text text-transparent">
        Services Gap
    </h1>

    <p className="md:text-[16px] text-[12px] text-gray-600 mb-6 md:text-start text-center font-raleway">
        <span className="font-semibold">Did you know... </span> <br />
        That seventy-five percent of IT decision-makers believe their staff lack skills? Among the best places are some of:
    </p>

    {/* Services */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4 justify-center">
        {services.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
                <div className="p-4 border rounded-md shadow-sm">
                    <img src={item.icon} alt="" />
                </div>
                <span className="text-sm text-center mt-2 text-semibold md:text-[16px] text-[12px] font-raleway">
                    {item.title}
                </span>
            </div>
        ))}
    </div>

    {/* Impact */}
    <h3 className="font-extrabold md:text-[18px] text-[14px] mb-2 text-start  font-raleway">
        What impact does this have on business?
    </h3>
    <ul className="list-disc pl-6 md:text-[16px] text-[12px] text-gray-700 space-y-1 mb-6 text-start font-raleway">
        <li>Less capacity to satisfy corporate goals</li>
        <li>Increased operational expenses</li>
        <li>longer project times and declining standards</li>
        <li>Stress among IT workers rising</li>
    </ul>

    {/* Solutions */}
    <h3 className="font-extrabold md:text-[18px] text-[14px] mb-2 text-start  font-raleway">
        Get Access to the Right Solutions
    </h3>
    <p className="text-[12px] text-gray-700 md:text-[16px] text-start  font-bold font-raleway">
      Through our professional services branch, Evergreen, PlacerIT provides advanced technical and talent services to IT companies all over the world. Having staffing professionals in more than 70+ offices in North America, Europe, and Asia as well as our state-of- the-art technology delivery center in Hyderabad, India, we offer the tools you need to meet the objectives of your business.
    </p>
</div>


                {/* Right Side Image */}
                <div>
                    <img
                        src="/images/Itgroup.svg"
                        alt="Tech Services Discussion"
                        className="rounded-xl  object-cover w-full h-full max-h-[700px]"
                    />
                </div>
            </div>
        </div>
    );
}
