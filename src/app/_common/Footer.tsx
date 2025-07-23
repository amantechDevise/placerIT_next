import React, { FC } from "react";
import Link from "next/link";


const Footer: FC = () => {
  return (
    <footer
      className="w-full bg-cover bg-center bg-no-repeat pb-10 relative"
      style={{
        backgroundImage: `linear-gradient(to right, #5D3DAFcc, #5598F7cc), url(/images/footerBgImage.jpg)`,
      }}
    >
      {/* ===== Bottom Part: Newsletter + Main Content ===== */}

      <div className="w-full px-6 py-8 md:py-14 max-w-7xl mx-auto ">
        {/* Newsletter */}
    <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/20 pb-6 mb-8   w-full">
  {/* Logo */}
  <img
    src="/images/logo.svg"
    alt="TechDevise Logo"
    className="h-12 md:h-16 mb-4 md:mb-0"
  />

  {/* Newsletter Section */}
  <div className="flex flex-col md:flex-row items-center w-full max-w-3xl gap-6 md:gap-8">
    {/* Label */}
    <p className="text-white font-semibold whitespace-nowrap text-lg md:text-xl">
      Newsletter!
    </p>

    {/* Input + Button */}
    <div className="flex flex-col sm:flex-row items-center w-full gap-4 sm:gap-6">
      {/* Input with Icon */}
      <div className="flex items-center bg-white rounded-2xl px-6 py-4 w-full sm:flex-grow">
        <img
          src="/images/env.png"
          alt="Email icon"
          className="mr-4 h-6 w-6 object-contain"
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="flex-grow outline-none text-black placeholder-black bg-white text-lg"
        />
      </div>

      {/* Submit Button */}
      <button className="bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] text-white px-6 sm:px-8 py-4 border border-white rounded-2xl font-semibold text-lg hover:opacity-90 transition w-full sm:w-auto">
        Submit
      </button>
    </div>
  </div>
</div>


        {/* Main content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3 md:text-[18px] text-[14px] text-start">About Company</h3>
            <p className="mb-4 text-white/80 md:text-[14px] text-[12px] text-start">
              Ewebot have much planned for the future, working with great
              clients and continued software development.
            </p>
            <div className="flex space-x-3 text-start">
              <a href="#">
                <img
                  src="/images/facebook.svg"
                  alt="Facebook"
                  className="h-6 w-6"
                />
              </a>
              <a href="#">
                <img
                  src="/images/insta.svg"
                  alt="Instagram"
                  className="h-6 w-6"
                />
              </a>
              <a href="#">
                <img
                  src="/images/tareade.svg"
                  alt="Twitter"
                  className="h-6 w-6"
                />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3 md:text-[18px] text-[14px]  text-start">Services</h3>
            <ul className="space-y-2 text-white/80 md:text-[14px] text-[12px] text-start">
              <li>Blockchain Development</li>
              <li>Quality Assurance</li>
              <li>Software Consultancy</li>
              <li>Digital Marketing</li>
              <li>UI/UX Design</li>
              <li>Website Development</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3 md:text-[18px] text-[14px] text-start">
              Quick Links
            </h3>
            <ul className="space-y-2 text-white/80 md:text-[14px] text-[12px]  text-start">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Our Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-start font-semibold mb-3 md:text-[18px] text-[14px]  text-start">Contact</h3>
            <ul className="space-y-3 text-white/80  md:text-[14px] text-[12px]">
              <li className="text-sm items-start text-start">
                4693 Winona Ct, Roseville, CA
                <br />
                95747
              </li>
              <li className="flex items-start text-center">
                <img
                  src="/images/phone.png"
                  alt="Phone"
                  className="w-5 h-5 mr-2"
                />
                +1(916)7770077
              </li>
              <li className="flex items-start text-center">
                <img
                  src="/images/gamilLogo.png"
                  alt="Email"
                  className="w-5 h-5 mr-2"
                />
                contact@placerit.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative pt-12">
        <h1
          className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 -top-8 font-extrabold tracking-wide text-center z-10 whitespace-nowrap overflow-hidden border-b border-white"
          style={{
            fontSize: "clamp(58px, 15vw, 310px)",
            lineHeight: 1,
            background:
              "linear-gradient(to bottom, #D7CAF6 60%, #676daa12 95%, #5A6AD200 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            opacity: 0.35,
            userSelect: "none",
          }}
        >
          Placer IT
        </h1>
      </div>
      <div className="text-center text-white/70 text-xs z-20 relative  sm:mt-10 md:mt-25 lg:mt-30 xl:mt-40 2xl:mt-54">
        <p>Privacy Policy &nbsp; | &nbsp; Terms & Conditions</p>
        <p className="mt-1">© 2025 TechDevise. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
