import React from "react";

export default function BlockchainInfo() {
  return (
    <div className="bg-[#F9FAFB] py-16 px-4 md:px-8 lg:px-20 relative overflow-hidden">
      <div className="absolute md:top-[63%] md:left-[35px] left-[35px] transform -translate-y-1/2 rotate-[-90deg]  z-10">
        <p className="text-[#DBDBDB] md:text-[32px] text-raleway  font-bold uppercase">
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
            Blockchain is a distributed digital ledger technology that ensures
            secure, transparent, and tamper-proof record-keeping without the
            need for a central authority. It enables peer-to-peer transactions
            across a decentralized network, making it the ideal solution for
            industries where trust, security, and accountability are paramount.
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
                  Blockchain operates on a distributed network, eliminating the
                  need for a central authority.
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
                  Data is encrypted and stored in blocks, making it nearly
                  impossible to alter or hack.
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
                  Once data is added to the blockchain, it cannot be altered or
                  deleted, ensuring the integrity of the records.
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
                  All participants in the blockchain network can access the same
                  data, ensuring transparency and traceability.
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
