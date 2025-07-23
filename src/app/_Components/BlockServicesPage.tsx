"use client"
import React, { useEffect } from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";
const services = [
  {
    title:
      (
        <>
          Our
          <br />
          Blockchain
          <br />
          Services
        </>
      ),
    description:
      'Blockchain could completely transform many different industries. We offer blockchain solutions specifically fit for the requirements of the following sectors',
    bgColor: 'bg-transparent text-white md:text-[53px] text-[32px] ',
  },
  {
    title: 'Finance & Banking',
    description:
      'Offer decentralized finance solutions (DeFi) to make people less reliant on standard middle-men, make sure financial transactions are safe, and automate processes.',
    icon: '/images/Group 344.png',
    bgColor: 'bg-white text-black ',
  },
  {
    title: 'Healthcare',
    description:
      'Enable tamper-proof solutions for pharmaceutical traceability, increase supply chain openness, and safe sharing of medical records.',
    icon: '/images/Group 345.png',
    bgColor: 'bg-white text-black',
  },
  {
    title: 'Supply Chain & Logistics',
    description:
      "Track items from source to delivery to improve supply chains' efficiency, traceability, and openness.",
    icon: '/images/Group 346.png',
    bgColor: 'bg-white text-black',
  },
  {
    title: 'Real Estate',
    description:
      'With blockchain-powered smart contracts, simplify property transfers, lower fraud rates, and automatically generate contracts.',
    icon: '/images/Group 347.png',
    bgColor: 'bg-white text-black',
  },
  {
    title: 'Government & Public Sector',
    description:
      'Set up easy-to-understand methods for voting, managing identities, and keeping public records.',
    icon: '/images/Group 348.png',
    bgColor: 'bg-white text-black',
  },
  {
    title: 'Retail & E-Commerce',
    description:
      'Track product source, enhance customer loyalty programs, and enable safe payments.',
    icon: '/images/Group 349.png',
    bgColor: 'bg-white text-black',
  },
  {
    title: 'Insurance',
    description:
      'Blockchain technology can help to improve fraud detection, automate policy management, and handle claims.',
    icon: '/images/Group 350.png',
    bgColor: 'bg-white text-black',
  },
  {
    title: 'Energy',
    description:
      'Control distributed energy systems, improve trade of renewable energy, and enable open energy use monitoring.',
    icon: '/images/Group 351.png',
    bgColor: 'bg-white text-black',
  },
];

export default function BlockServicesPage() {
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
    <div
      className="min-h-full text-white px-6 py-12"
      style={{
        backgroundImage: `linear-gradient(to right, #5D3DAF, #5598F7), url(/images/blockchainbg.svg)`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.8
      }}
    >
     <div className="max-w-7xl mx-auto">
  <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" data-aos="fade-up" data-aos-duration="1000">
    {services.map((service, index) => (
      <div
        key={index}
        className={`${service.bgColor ?? 'bg-white text-gray-800'} rounded-3xl p-6 transition-shadow duration-400`}
      >
        <div className="text-3xl mb-3 text-center md:text-start">
          {service.icon && (
            <img
              src={service.icon}
              alt={service.title}
              className="mx-auto md:mx-0 inline-block"
            />
          )}
        </div>
        <h3
          className={`font-extrabold font-raleway mb-2 text-center md:text-start ${index === 0 ? 'md:text-[40px] text-[32px] mt-[-65px]' : 'md:text-[22px] text-[16px]'}`}
        >
          {service.title}
        </h3>
        <p className="text-center font-raleway md:text-start md:text-[16px] text-[12px]">{service.description}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
