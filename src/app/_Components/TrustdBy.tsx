'use client';
import React, { useState } from "react";

const brands = [
    { src: '/images/Trust9.png', alt: 'Polygon Logo' },
    { src: '/images/Trust10.png', alt: 'Telos Logo' },
    { src: '/images/Trust11.png', alt: 'Celo Logo' },
    { src: '/images/Trust12.png', alt: 'EOS Logo' },
    { src: '/images/Trust13.png', alt: 'XinFin Logo' },
    { src: '/images/Trust14.png', alt: 'Aurora Logo' },
    { src: '/images/Trust15.png', alt: 'Ethereum Logo' },
    { src: '/images/Trust1.svg', alt: 'Solana Logo' },
    { src: '/images/Trust2.svg', alt: 'Avalanche Logo' },
    { src: '/images/Trust3.svg', alt: 'Cardano Logo' },
    { src: '/images/Trust4.svg', alt: 'Cardano Logo' },
    { src: '/images/Trust5.svg', alt: 'Cardano Logo' },
    { src: '/images/Trust6.svg', alt: 'Cardano Logo' },
    { src: '/images/Trust7.svg', alt: 'Cardano Logo' },
    { src: '/images/Trust8.svg', alt: 'Cardano Logo' },
];

const TrustedBy: React.FC = () => {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <div className="w-full bg-gradient-to-r from-[#5D3DAF] to-[#5598F7] py-6 absolute md:top-165 top-135">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
                <div className="hidden md:block md:mr-10 text-white whitespace-nowrap">
                    <h2 className="text-xl md:text-[18px] font-bold font-raleway">Trusted By</h2>
                </div>


                {/* Marquee Container */}
                <div
                    className="relative overflow-hidden w-full"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        className={`flex whitespace-nowrap gap-10 w-max animate-scroll ${isPaused ? 'pause-animation' : ''}`}
                    >
                        {[...brands, ...brands].map((brand, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
                            >
                                <img
                                    src={brand.src}
                                    alt={brand.alt}
                                    className="h-12 md:h-14 object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;
