"use client"
import React, { useState, useEffect } from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    title: "What are the advantages of your service?",
    content:
      "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing...",
  },
  {
    title:
      "Are there any fees or commissions in addition to the monthly subscription?",
    content:
      "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing...",
  },
  {
    title: "You really don't charge per user? Why not?",
    content:
      "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing...",
  },
  {
    title: "What happens when I go over my monthly active limit?",
    content:
      "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing...",
  },
  {
    title: "Can your service help me understand how to work with my product?",
    content:
      "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing...",
  },
  {
    title: "Which third-party application do you integrate with?",
    content:
      "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing...",
  },
  {
    title: "I have another question!",
    content:
      "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing...",
  },
];

const Faq: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

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
    <div className="relative font-inter antialiased bg-[#F7F7F7] min-h-full flex flex-col justify-center overflow-hidden md:py-24 py-4 md:px-4">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Title and Description */}
          <div className="flex-1 text-center md:text-left">
            <h1
              className="md:text-[40px] text-[30px] font-extrabold text-slate-900 mb-4 font-Raleway"
              data-aos="fade-up"
            >
              Frequently{" "}
              <span
                style={{
                  display: "inline-table",
                  background: "linear-gradient(to right, #5D3DAF, #5598F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Asked Questions
              </span>
            </h1>
            <p className="text-slate-600 md:text-[16px] text-[12px]" data-aos="fade-up">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's <br /> standard
              dummy text.
            </p>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 mt-2 md:mt-0" data-aos="fade-up">
            <img
              src="/images/fqa.png"
              alt="FAQ illustration"
              className="w-[200px] h-auto md:mr-2"
            />
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-2 mt-10">
          {faqs.map((faq, index) => {
            const isOpen = expandedIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-md shadow transition duration-300"
              >
                <div className="px-4">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-4 text-left font-semibold md:text-[24px] text-[16px]"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${index}`}
                  >
                    {faq.title}
                    <svg
                      className="fill-indigo-500 shrink-0 ml-4"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </svg>
                  </button>

                  {/* FAQ Content */}
                  <div
                    id={`faq-content-${index}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out text-slate-600 md:text-[16px] text-[12px] ${
                      isOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-start">{faq.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
