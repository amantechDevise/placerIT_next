import React from "react";

const Process = () => {
  return (
    <section className="bg-white px-4 py-8 md:py-14">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">Our Process?</span>
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-5 max-w-7xl mx-auto">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/Group 169.svg"
            alt="Team working process"
            className="w-[95%] h-auto rounded-lg object-cover"
          />
        </div>

        {/* Right Side - Text and Icons */}
        <div className="w-full lg:w-1/2 flex flex-col gap-15">
          {/* Block 1 */}
          <div className="flex items-start gap-4">
            <img
              src="/images/Group 151.svg"
              alt="Transparency Icon"
              className="w-16 h-16 mt-1"
            />
            <div>
              <h3 className="text-lg md:text-[24px] font-semibold font-raleway text-gray-800 text-start">
                Transparency
              </h3>
              <p className="text-sm md:text-[16px] font-regular font-raleway text-gray-600 text-start">
                You’ll always know where your project stands.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex items-start gap-4">
            <img
              src="/images/Group 152.svg"
              alt="Collaboration Icon"
              className="w-16 h-16 mt-1"
            />
            <div>
              <h3 className="text-lg md:text-[24px] font-semibold font-raleway text-gray-800 text-start">
                Collaboration
              </h3>
              <p className="text-sm md:text-[16px] font-regular font-raleway text-gray-600 text-start ">
                We believe in working together to achieve the best outcomes.
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex items-start gap-4">
            <img
              src="/images/Group 153.svg"
              alt="Flexibility Icon"
              className="w-16 h-16 mt-1"
            />
            <div>
              <h3 className="text-lg md:text-[24px] font-semibold font-raleway text-gray-800 text-start">
                Flexibility
              </h3>
              <p className="text-sm md:text-[16px] font-regular font-raleway text-gray-600 text-start">
                We adapt to your needs, ensuring that our solutions evolve as
                your business does.
              </p>
            </div>
          </div>

          {/* Block 4 */}
          <div className="flex items-start gap-4">
            <img
              src="/images/Group 154.svg"
              alt="Customer Success Icon"
              className="w-16 h-16 mt-1"
            />
            <div>
              <h3 className="text-lg md:text-[24px] font-semibold font-raleway text-gray-800 text-start">
                Customer Success
              </h3>
              <p className="text-sm md:text-[16px] font-regular font-raleway text-gray-600 text-start ">
                We’re not happy until you’re fully satisfied with the results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
