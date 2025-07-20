'use client';

import Image from 'next/image';

export default function DigitalServices() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:gap-20">

        {/* Images */}
        <div className="relative mb-8 md:mb-0 w-fit">
          {/* Background Image (Second) */}
          <div className="absolute md:left-12 md:top-6 md:w-[350px] md:h-[440px] rounded-2xl overflow-hidden shadow-md z-0">
            <Image
              src="/images/Digimage (1).webp"
              alt="Marketing Visual 2"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="relative z-10 absolute md:-left-40">
            {/* Icon */}
            <div className="absolute md:-top-6 md:-left-6 w-22 h-22 z-20 animate-[spin_6s_linear_infinite]">
              <Image
                src="/images/Group 387.svg"
                alt="Icon"
                layout="fill"
                objectFit="contain"
              />
            </div>

            {/* First Main Image */}
            <div className="md:w-[370px] md:h-[490px] rounded-2xl overflow-hidden shadow-lg relative">
              <Image
                src="/images/Digimage.svg"
                alt="Marketing Visual 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-[53px] font-extrabold font-raleway">
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
