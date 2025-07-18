import React from "react";


const QualityServices = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-center px-6 py-12 md:py-20 bg-white">
            <div className="max-w-7xl flex flex-col md:flex-row items-center gap-8 w-full">
                {/* Left Side - Image and Overlay Graphics */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-5xl md:text-[80px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] font-raleway">
                       Quality {" "}
                    </h2>

                    <h2 className="text-black  md:text-[42px] text:3xl mb-6 font-extrabold font-raleway">
                        Assurance Services
                    </h2>
                    <p className="text-gray-700 mb-6 font-regular font-raleway md:text-[16px] text-[12px]">
                        At <span className="font-semibold"> PlacerIT</span>, 
                        we understand that delivering a seamless and error-free product is essential to your business success. Our Quality Assurance (QA) services ensure that your products, software, or systems meet the highest standards of quality before they reach the market.
                    </p>
                    <p className="text-gray-700 font-regular font-raleway md:text-[16px] text-[12px]">
                       Whether you’re developing a mobile app, a website, or enterprise software, our QA experts are here to help you eliminate defects and optimize your product for the best user experience.
                    </p>
                </div>


                {/* Right Side - Text Content */}
                <div className="relative w-full md:w-1/2">
                    <img
                        src="/images/Group 645.svg"
                        alt="User working on blockchain"
                        className="w-full rounded-xl "
                    />
                    {/* Top Right Icon */}
                    <img
                        src="/images/Group 352.png"
                        alt="Top graphic"
                        className="absolute -left-6 -top-6 w-16 h-16 md:w-30 md:h-30 animate-[spin_8s_linear_infinite]"
                        style={{ transformOrigin: "center center" }}
                    />
                    <img
                        src="/images/mobile-app.png"
                        alt="Bottom graphic"
                        className="absolute -bottom-8 -right-8 md:-bottom-18 md:-right-18 w-20 h-20 md:w-40 md:h-40 "
                    />
                </div>
            </div>
        </section>
    );
};

export default QualityServices;
