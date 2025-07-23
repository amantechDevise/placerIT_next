'use client';

import Image from 'next/image';

export default function DigitalServices() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:gap-20">
 <div className="relative w-full md:w-1/2">
          <img
            src="/images/Digimage.png"
            alt="User working on blockchain"
            className="w-full rounded-xl "
          />
          {/* Top Right Icon */}
          <img
            src="/images/Group 387.svg"
            alt="Top graphic"
            className="absolute -left-6 -top-6 sm:w-16 h-16 md:w-15 md:h-15 xl:w-30 xl:h-30 animate-[spin_8s_linear_infinite]"
            style={{ transformOrigin: "center center" }}
          />
         
        </div>


        {/* Text Content */}
        <div className="max-w-xl text-center md:text-left mt-5">
          <h2 className="text-[30px] md:text-[53px] font-extrabold font-raleway">
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] font-raleway">
              Digital Marketing
            </span>{' '}
            <span className="text-black">Services That Drive Results</span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-[16px] leading-relaxed font-raleway">
            In today’s digital-first world, your business needs more than just an online presence — it needs an effective, results-driven digital marketing strategy. <span className="font-semibold text-black">Ravent</span> specializes in crafting powerful marketing solutions that help you stand out, get found, and connect with the right audience.
          </p>
          <p className="text-gray-600 mt-4 text-sm">
            Our team of experts uses battle-tested tools and strategies to deliver measurable results that make an impact.
          </p>
        </div>
      </div>
    </section>
  );
}
