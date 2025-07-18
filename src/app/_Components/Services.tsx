import React from "react";

const services = [
  {
    title: (
      <>
        Software
        <br />
        Consultancy
      </>
    ),
    image: "/images/Group 595.svg",
    message:
      "We offer everything from planning to building a first product implementation through complex, multi-product IT transformation. We offer you technological advice that is pragmatic as well as futuristic that gives your business a strong advantage.",
  },
  {
    title: (
      <>
        Website
        <br />
        Development
      </>
    ),
    image: "/images/Group 597.svg",
    message:
      "Looking to launch your own business website? If yes, our expert team of web developers and designers will surely provide you with a website of your dreams. Our designing and development is done on the basis of our client requirement, and we ensure that our out of the box website will surely impress your customers.",
  },
  {
    title: (
      <>
        QA
        <br />
        Testing
      </>
    ),
    image: "/images/Group 596.svg",
    message:
      "We offer a comprehensive package of Software Quality Assurance (QA) and Testing services. We maximize quality and performance while reducing costs and risks.",
  },
  {
    title: (
      <>
        Digital
        <br />
        Marketing
      </>
    ),
    image: "/images/Group 602.svg",
    message:
      "Opt for our result-oriented digital marketing strategies to give your business a strong online presence and visibility boost.",
  },
  {
    title: (
      <>
        Blockchain
        <br />
        Development
      </>
    ),
    image: "/images/Group 601.svg",
    message:
      "Capitalize on Blockchain to achieve transparency and automation in business processes. We tailor solutions to combat risks.",
  },
  {
    title: (
      <>
        UI/UX
        <br />
        Design
      </>
    ),
    image: "/images/Group 600.svg",
    message:
      "Build products with a design team that meets deadlines and delivers top UI/UX with clear processes and expert design thinking.",
  },
];

const Services = () => {
  return (
    <div className="relative w-full py-16 px-4 flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Background */}
      <img
        src="images/GroupImage.svg"
        alt="Background"
        className="absolute top-10 left-10 w-[150px] md:w-[350px] h-auto object-contain z-0"
      />

      {/* Floating Icon */}
      <div className="absolute md:top-12  top-4 md:right-6 right-8 z-10">
        <img
          src="images/image 1.svg"
          alt="Settings"
          className="w-22 h-22   animate-bounce"
        />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-[40px] font-extrabold text-black font-Raleway">
          <span className="text-purple-700 font-bold">Services</span> we offer
          for you
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 w-full max-w-[1220px] px-4">
        <div className="flex flex-wrap justify-center -mx-4">
          {services.map((service, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="relative w-full h-[380px] [perspective:1000px] group">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  {/* Front */}
                  <div className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg [backface-visibility:hidden] bg-gradient-to-b from-purple-800 to-blue-900 flex items-center justify-center">
                    <img
                      src={service.image}
                      alt="Service"
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 flex items-center justify-center px-4">
                      <p className="text-white text-[28px] font-bold text-center font-Raleway drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
                        {service.title}
                      </p>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#281165] to-[#1F5196] flex items-center justify-center">
                    <div className="p-6 flex items-center justify-center h-full">
                      <p className="text-white text-sm text-center font-Raleway leading-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                        {service.message}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
