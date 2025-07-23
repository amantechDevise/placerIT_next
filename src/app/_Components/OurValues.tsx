const OurValues = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap items-stretch">
      {/* Left Section - Full Width Image */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-[900px]">
        <img
          src="/images/Mask group.svg"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Inside Container */}
      <div className="w-full lg:w-1/2 flex items-center">
        <div className="container mx-auto px-4 py-10 2xl:pr-80 xl:pr-20">
          <h2 className="text-[32px] lg:text-[42px] font-extrabold font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] mb-6">
            Our Values
          </h2>

          <div className="space-y-6">
            {/* Integrity Card */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-[18px] font-bold font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">
                Integrity
              </h3>
              <p className="text-gray-700 text-[16px] mt-2 font-raleway">
                We think that business should be done the correct way—openly, honestly, with responsibility.
              </p>
            </div>

            {/* Collaboration Card */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-[18px] font-bold font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">
                Collaboration
              </h3>
              <p className="text-gray-700 text-[16px] mt-2 font-raleway">
                Working together with our clients, we help them to identify their requirements and design unique solutions.
              </p>
            </div>

            {/* Innovation Card */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-[18px] font-bold font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">
                Innovation
              </h3>
              <p className="text-gray-700 text-[16px] mt-2 font-raleway">
               We welcome change and always hunt creative ideas to satisfy our clients' changing needs.
              </p>
            </div>

            {/* Excellence Card */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-[18px] font-bold font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF]">
                Excellence
              </h3>
              <p className="text-gray-700 text-[16px] mt-2 font-raleway">
             Our first goal in anything we do is to provide the best possible quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
