import React from "react";

export default function BlockchainInfo() {
  return (
    <div className="bg-[#F9FAFB] py-8 md:py-14 px-4 md:px-8 lg:px-20 relative overflow-hidden">
     <div className="hidden xl:block absolute md:top-[63%] xl:left-[-189px] 2xl:left-[35px] transform -translate-y-1/2 rotate-[-90deg] z-10">
  <p className="text-[#DBDBDB] md:text-[32px] text-raleway font-bold uppercase">
    Key Features of Blockchain
  </p>
</div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-[42px] font-extrabold font-raleway mb-4 text-gray-800">
            What is <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] font-raleway">Blockchain?</span>
          </h1>
          <p className="md:text-[16px] text-[12px] text-gray-600 font-raleway leading-relaxed">
            Without a central authority, blockchain is a distributed digital ledger system guaranteeing safe, open, and
tamper-proof record-keeping. It is the perfect answer for businesses where responsibility, security, and trust rule since it
lets peer-to-peer transactions across a distributed network.
          </p>
        </div>

        {/* Cards Only */}
        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          {/* Left: Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Decentralization */}
            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center md:items-start gap-4">
              <img
                src="images/Group 323.svg"
                alt="Decentralization"
                className="w-15 h-15"
              />
              <div className="text-center md:text-start">
                <h3 className="md:text-[22px] text-[16px] font-bold font-raleway mb-1">
                  Decentralization
                </h3>
                <p className="text-gray-500 md:text-[16px] text-[12px] font-raleway">
                 Blockchain doesn't need a central authority because it works on a distributed network.
                </p>
              </div>
            </div>

            {/* Security */}
            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center md:items-start gap-4 md:mb-5">
              <img
                src="images/Group 324.svg"
                alt="Security"
                className="w-15 h-15"
              />
              <div className="md:text-start text-center">
                <h3 className="md:text-[22px] text-[16px] font-bold font-raleway mb-1">
                  Security
                </h3>
                <p className="text-gray-500 md:text-[16px] text-[12px] font-raleway">
                 Data is encrypted and stored in "blocks," making it virtually impossible to change or hack.
                </p>
              </div>
            </div>

            {/* Immutability */}
            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center md:items-start gap-4 md:mt-5">
              <img
                src="images/Group 325.svg"
                alt="Immutability"
                className="w-15 h-15"
              />
              <div className="md:text-start text-center">
                <h3 className="md:text-[22px] text-[16px] font-bold font-raleway mb-1">
                  Immutability
                </h3>
                <p className="text-gray-500 md:text-[16px] text-[12px] font-raleway">
                The same data is accessible to every blockchain network user, guaranteeing traceability and openness.
                </p>
              </div>
            </div>

            {/* Transparency */}
            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center md:items-start gap-4 relative z-10">
              <img
                src="images/Group 326.svg"
                alt="Transparency"
                className="w-15 h-15"
              />
              <div className="md:text-start text-center">
                <h3 className="md:text-[22px] text-[16px] font-bold font-raleway mb-1">
                  Transparency
                </h3>
                <p className="text-gray-500 md:text-[16px] text-[12px] font-raleway">
                  Data entered into the blockchain cannot be changed or removed, guaranteeing the integrity of the records.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Background Image OUTSIDE the grid */}
        <div className="absolute top-[65%] right-40 transform translate-y-[-50%] translate-x-[30%] z-0 pointer-events-none">
          <img
            src="/images/Group 322.svg"
            alt="Blockchain illustration"
            className="w-[800px] max-w-none"
          />
        </div>
      </div>
    </div>
  );
}
