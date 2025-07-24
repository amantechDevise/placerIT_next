const QualityEssential = () => {
    return (
        <div
            className="flex flex-wrap lg:flex-nowrap items-stretch gap-10 bg-cover bg-center"
        >
            <div className="w-full lg:w-[35%] md:h-[900px] h-[500px]">
                <img
                    src="/images/focused.jpg"
                    alt="Quality Assurance Illustration"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="w-full lg:w-[65%] flex items-center bg-[#F7F7F7]/90">
               <div className="container mx-auto px-4 py-10 2xl:pr-80 xl:pr-20">
                    <h2 className="text-[30px] lg:text-[42px] font-extrabold font-raleway mb-4 text-center md:text-start">
                        Why{" "}
                        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] font-raleway">
                            Quality Assurance
                        </span>{" "}
                        is <span className="text-gray-900">Essential?</span>
                    </h2>
                    <p className="text-gray-600  text-[12px] md:text-[16px] mb-6 text-start">
                        Quality Assurance is the process of ensuring that a product or service meets specific
                        requirements and is free from defects. For your business, QA helps to:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                      <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-200 flex flex-col items-center text-center md:items-start md:text-left">
  <img src="/images/Group 323.svg" alt="" className="mb-4" />
  <h3 className="text-[18px] font-bold font-raleway text-black">
    Enhance Product <br /> Reliability
  </h3>
  <p className="text-gray-700 text-[16px] mt-2">
    Ensure your product works consistently, meeting the expectations of users.
  </p>
</div>

                        <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-200 flex flex-col items-center text-center md:items-start md:text-left">
                            <img src="/images/Group 324.svg" alt="" />
                            <h3 className="text-[18px] font-bold font-raleway text-black">
                                Boost Customer <br />Satisfaction
                            </h3>
                            <p className="text-gray-700 text-[16px] mt-2">
                                Prevent errors or glitches that could lead to user frustration and loss of trust.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-200 flex flex-col items-center text-center md:items-start md:text-left">
                            <img src="/images/Group 325.svg" alt="" />
                            <h3 className="text-[18px] font-bold font-raleway text-black">
                                Optimize Business <br /> Efficiency
                            </h3>
                            <p className="text-gray-700 text-[16px] mt-2">
                                Once data is added to the blockchain it cannot be altered or deleted, ensuring the
                                integrity of the records.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-200 flex flex-col items-center text-center md:items-start md:text-left">
                            <img src="/images/Group 326.svg" alt="" className="mb-4" />
                            <h3 className="text-[18px] font-bold font-raleway text-black">
                                Ensure <br /> Compliance
                            </h3>
                            <p className="text-gray-700 text-[16px] mt-2">
                                Adhere to industry standards, regulations, and quality requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QualityEssential;
