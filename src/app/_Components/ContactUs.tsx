"use client";
import { useEffect } from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";
interface ContactUsProps {
  showBorder?: boolean;  
}
const Contact_Us = ({ showBorder }: ContactUsProps) => {
  useEffect(() => {
    const aosConfig: AosOptions = {
      duration: 1000,
      once: true,
      offset: 120,
      easing: "ease-in-out",
    };

    AOS.init(aosConfig);
  }, []);

  return (
       <section className="relative w-full ">
      <div
        className={`relative z-10 max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 px-6 py-12 md:px-10 md:py-16
        ${showBorder ? "border border-gray-300" : ""}`}
      >
        {/* Left Side: Text, Icon and Image1 */}
        <div className="flex flex-col justify-center items-start p-4 md:p-8">
          {/* Moved Floating Icon Here */}
          <img
            src="/images/support_18296255 1.png"
            alt="Support Icon"
            className="w-10 md:w-14 mb-4 animate-bounce"
            data-aos="fade-down"
          />

          <h2 className="text-3xl md:text-[36px] font-bold text-black text-raleway mb-4">
            Hey! Let’s Talk
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4 text-start">
            Is your business finding it difficult to flourish in the online
            world? Well, it’s no surprise because if proper digital marketing is
            not done, then your website will not be able to gain the desired
            notice from the audience. Hence, opt for our result-oriented digital
            marketing strategies to give your business a boost.
          </p>

          <img
            src="/images/formImage.png"
            alt="Let's Talk"
            className="w-full max-w-sm mb-6 mx-auto md:mx-0"
            data-aos="fade-up"
          />
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white p-4 md:p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-[16px] font-bold text-raleway text-gray-700 mb-1 text-start">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
         <label className="block text-[16px] font-bold text-raleway text-gray-700 mb-1 text-start">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
           <label className="block text-[16px] font-bold text-raleway text-gray-700 mb-1 text-start">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
             <label className="block text-[16px] font-bold text-raleway text-gray-700 mb-1 text-start">
                Your Message
              </label>
              <textarea
                placeholder="Write here..."
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <div className="text-start">
              <button
                type="submit"
                className="w-[200px] text-white font-medium py-4 rounded-lg transition duration-300 hover:opacity-90"
                style={{
                  background: "linear-gradient(to right, #5D3DAF, #5598F7)",
                }}
              >
                Send Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact_Us;
