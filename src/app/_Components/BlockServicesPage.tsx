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
      'Blockchain has the potential to revolutionize various sectors. We provide blockchain solutions tailored to meet the specific needs of the following industries.',
    bgColor: 'bg-transparent text-white md:text-[53px] text-[32px] ',
  },
  {
    title: 'Finance & Banking',
    description:
      'Secure financial transactions, automate processes, and offer decentralized finance solutions (DeFi) to reduce dependency on traditional intermediaries.',
    icon: '/images/Group 344.png',
    bgColor: 'bg-white text-black ',
  },
  {
    title: 'Healthcare',
    description:
      'Enable secure sharing of medical records, improve supply chain transparency, and create tamper-proof systems for pharmaceutical traceability.',
    icon: '/images/Group 345.png',
    bgColor: 'bg-white text-black',
  },
  {
    title: 'Supply Chain & Logistics',
    description:
      'Enhance transparency, traceability, and efficiency in supply chains by tracking goods from source to delivery.',
    icon: '/images/Group 346.png',
    bgColor: 'bg-white text-black',
  },
  {
    title: 'Real Estate',
    description:
      'Streamline property transactions, reduce fraud, and automate contracts with blockchain-powered smart contracts.',
    icon: '/images/Group 347.png',
    bgColor: 'bg-white text-black',
  },
  {
    title: 'Government & Public Sector',
    description:
      'Implement secure, transparent systems for voting, identity management, and public records.',
    icon: '/images/Group 348.png',
    bgColor: 'bg-white text-black',
  },
  {
    title: 'Retail & E-Commerce',
    description:
      'Facilitate secure payments, improve customer loyalty programs, and track the origin of products.',
    icon: '/images/Group 349.png',
    bgColor: 'bg-white text-black',
  },
  {
    title: 'Insurance',
    description:
      'Automate claims processing, enhance fraud detection, and streamline policy management using blockchain technology.',
    icon: '/images/Group 350.png',
    bgColor: 'bg-white text-black',
  },
  {
    title: 'Energy',
    description:
      'Manage decentralized energy grids, enhance renewable energy trading, and enable transparent energy consumption tracking.',
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
      className="min-h-screen text-white px-6 py-12"
      style={{
        backgroundImage: `linear-gradient(to right, #5D3DAF, #5598F7), url(/images/blockchainbg.svg)`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.8
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" data-aos="fade-up"
          data-aos-duration="1000">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor ?? 'bg-white text-gray-800'} rounded-3xl  p-6  transition-shadow duration-400`}
            >
              <div className="text-3xl mb-3 md:text-start text-center">
                {service.icon && <img src={service.icon} alt={service.title} />}
              </div>
              <h3
                className={`font-extrabold mb-2 md:text-start text-center ${index === 0
                  ? 'md:text-[40px] text-[32px] mt-[-65px]'
                  : 'md:text-[22px] text-[16px]'
                  }`}
              >{service.title}</h3>
              <p className="md:text-[16px] text-[12px]  md:text-start text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
