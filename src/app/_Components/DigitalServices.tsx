'use client';

import Image from 'next/image';

export default function DigitalServices() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-8 md:py-14">
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
         Your business needs a digital marketing plan that produces not only an online presence but also outcomes in the digital-first climate of today. Here at PlacerIT, we are masters in creating original marketing plans to increase exposure, widen your clientele, and include your target market. Using the newest techniques and strategies, our staff of experts generates quantifiable outcomes with effect.
          </p>
          <p className="text-gray-600 mt-4 text-sm font-raleway">
          Our team of specialists uses the latest tools and tactics to create measurable results that make an impact.
          </p>
        </div>
      </div>
    </section>
  );
}
