import React from "react";

const ProfessionalStaff = () => {
    return (
        <section className="relative bg-[#F1F6FF] px-4 py-12 md:py-20 lg:py-24 overflow-hidden">

            {/* Centered Top Heading and Paragraph */}
            <div className="max-w-5xl mx-auto text-center mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-[42px] font-extrabold text-gray-900 mb-4 font-raleway">
                    Professional Services Beyond{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] ">IT Staffing</span>
                </h2>

                <p className="text-gray-600 text-base md:text-[16px] leading-relaxed font-raleway">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley.
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
                        <strong className="font-semibold text-gray-900">PlaceIT</strong> goes beyond staffing. As a
                        true tech and talent partner, we go above and beyond to deliver IT
                        services that power innovation and transformation. When you partner
                        with Insight Global, you get the engine of a leading IT staffing
                        company as well as extensive technical solutions through our
                        Evergreen professional services division.
                    </p>

                    <p className="text-gray-700 text-base md:text-[16px] leading-relaxed font-raleway">
                        Evergreen pairs a forward-thinking tech approach with Insight
                        Global’s powerhouse staffing capabilities. The result? An expert
                        vision to transform your business with the skills to execute the
                        strategy. From sourcing high-impact, built-for-purpose teams to
                        helping you meet your technology goals, we design solutions that
                        drive current success and long-term growth.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProfessionalStaff;
