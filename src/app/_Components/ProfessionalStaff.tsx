import React from "react";

const ProfessionalStaff = () => {
    return (
        <section className="relative bg-[#F1F6FF] px-4 py-8 md:py-14  overflow-hidden">

            {/* Centered Top Heading and Paragraph */}
            <div className="max-w-5xl mx-auto text-center mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-[42px] font-extrabold text-gray-900 mb-4 font-raleway">
                    Professional Services Beyond{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] ">IT Staffing</span>
                </h2>

                <p className="text-gray-600 text-base md:text-[16px] leading-relaxed font-raleway">
                    With customized advice, digital transformation, and scalable tech solutions, Placerit provides
professional services that go beyond traditional IT staffing to help your business reach its changing goals.
                </p>
            </div>

            {/* Main Content Section */}
            <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
                {/* Left Side - Image */}
                <div className="relative w-full lg:w-1/2">
                    <img
                        src="/images/StaffMask group.svg"
                        alt="Team collaborating"
                        className="rounded-lg w-full h-auto"
                    />
                </div>

                {/* Right Side - Text Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <p className="text-gray-700 text-base md:text-[16px] leading-relaxed font-raleway mb-4">
                        <strong className="font-semibold text-gray-900">PlaceIT</strong> transcends mere staffing. Being real tech and talent partners, we go above and beyond to provide IT solutions enabling innovation and transformation. Working with Insight Global provides you access to comprehensive technical solutions via our Evergreen professional services section as well as the engine of a top IT staffing firm.
                    </p>

                    <p className="text-gray-700 text-base md:text-[16px] leading-relaxed font-raleway">
                        A forward-thinking technological approach is combined with Insight Global’s formidable personnel capabilities in Evergreen. What follows? An expert vision to change your company using the knowledge to carry out the plan. From helping you reach your technological goals to sourcing high-impact, built-for-purpose teams, we provide solutions that propel both present success and long-term expansion.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProfessionalStaff;
