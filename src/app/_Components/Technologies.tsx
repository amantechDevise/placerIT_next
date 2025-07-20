"use client";

import React, { useEffect } from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";

const services = [
    {
        title: (
            <>

                <span className="bg-gradient-to-r from-[#5D3DAF] to-[#5598F7] bg-clip-text text-transparent">
                    Technologies
                </span>
                <br />
                We Use
            </>
        ),

    },
    {
        title: "Frontend",
        description:
            "HTML5, CSS3, JavaScript (React, Angular, Vue.js)",
        icon: "/images/Group 411.png",
    },
    {
        title: "Bankend",
        description:
            "PHP, Python, Ruby on Rails, Node.js",
        icon: "/images/Group 412.png",
    },
    {
        title: "CMS",
        description:
            "WordPress, Drupal, Joomla, custom-built CMS",
        icon: "/images/Group 413.png",
    },
    {
        title: "E-commerce",
        description:
            "Shopify, WooCommerce, Magento, custom e-commerce solutions",
        icon: "/images/Group 414.png",
    },
    {
        title: "Database",
        description:
            "MySQL, MongoDB, PostgreSQL",
        icon: "/images/Group 415.png",
    },
];

export default function Technologies() {
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
        <div className="min-h-full text-white px-6 py-16 bg-white">
            <div className="max-w-6xl mx-auto">
                <div
                    className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`bg-white text-gray-800 rounded-3xl p-4 transition-shadow duration-400 ${index !== 0 ? "border-1 border-[#CDCDCD]" : ""
                                }`}
                        >
                            <div className="text-3xl md:mb-4">
                                {service.icon && <img src={service.icon} alt="icon" />}
                            </div>
                            <h3
                                className={`mb-4 md:mb-8 text-center md:text-start ${index === 0
                                    ? "md:text-[50px] text-[32px]   font-extrabold"
                                    : "md:text-[22px] text-[16px] font-semibold"
                                    }`}
                            >
                                {service.title}
                            </h3>
                            <p className="md:text-[16px] text-[12px] text-center md:text-start">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
