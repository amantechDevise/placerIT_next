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
    image: "/images/Group 595.jpg",
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
    image: "/images/Group 597.jpg",
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
    image: "/images/Group 596.jpg",
    message:
      "We offer a comprehensive package of Software Quality Assurance(QA) and Testing services. We are maximising the quality and performance of software solutions for our clients while reducing the costs and risks.",
  },
  {
    title: (
      <>
        Digital
        <br />
        Marketing
      </>
    ),
    image: "/images/Group 602.jpg",
    message:
      "Is your business finding it difficult to flourish in the online world? Well, it is no surprise because if proper digital marketing is not done then your website will not be able to gain the desired notice from the audience. Hence, opt for our result oriented digital marketing strategies to give your business a boost.",
  },
  {
    title: (
      <>
        Blockchain
        <br />
        Development
      </>
    ),
    image: "/images/Group 601.jpg",
    message:
      "Capitalize on Blockchain technology to achieve complete transparency and automation in varied business processes. Our Blockchain solutions are tailored to help businesses combat operational and strategic risks.",
  },
  {
    title: (
      <>
        UI/UX
        <br />
        Design
      </>
    ),
    image: "/images/Group 600.jpg",
    message:
      "Want to build your product with a team that establishes a clear design process, meets deadlines, and delivers a spot-on end result? Turn to Techdevise’s UI and UX services. Our design team is a small design studio with best experts in the field that will help you build an engaging product easily and quickly.",
  },
];

const Services = () => {
  return (
    <div className="relative w-full py-8 md:py-14 px-4 flex flex-col items-center justify-center bg-white overflow-hidden">
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
        <h2 className="text-3xl md:text-[40px] font-extrabold text-black font-raleway">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] font-bold">Services</span> we offer
          for you
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 w-full max-w-[1220px] px-4">
        <div className="flex flex-wrap justify-center -mx-4">
          {services.map((service, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="relative w-full h-[380px] [perspective:900px] group">
                <div className="relative w-full h-full transition-transform duration-[2000ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg [backface-visibility:hidden] bg-gradient-to-b from-[#5D3DAF] to-[#5598F7] flex items-center justify-center">
                    <img
                      src={service.image}
                      // alt={service.title}
                      className="w-full h-full object-cover opacity-90"
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-4 [transform-style:preserve-3d]">
                      <p className="text-white md:text-[28px] text-[20px] font-bold text-center font-raleway drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)] transition-transform duration-[1500ms] group-hover:[transform:rotateY(180deg) translateZ(40px)]">
                        {service.title}
                      </p>
                      <p className="text-white  md:text-[16px] text-[12px] text-center font-raleway leading-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] md:hidden mt-10 transition-transform duration-[2000ms] delay-100 group-hover:[transform:rotateY(180deg) translateZ(25px)]">
                        {service.message}
                      </p>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#281165] to-[#1F5196] flex items-center justify-center">
                    <div className="p-6 flex items-center justify-center h-full [transform-style:preserve-3d]">
                      <p className="text-white md:text-[16px] text-[12px] text-center font-raleway leading-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-transform duration-[2000ms] delay-200 group-hover:[transform:rotateY(360deg) translateZ(20px)]">
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
