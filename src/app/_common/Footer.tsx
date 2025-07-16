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

      <div className="w-full px-6 py-12 max-w-7xl mx-auto mt-8">
        {/* Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/20 pb-8 mb-8">
          <img
            src="/images/logo.png"
            alt="TechDevise Logo"
            className="h-15 mb-4 md:mb-0"
          />
          <div className="flex flex-col md:flex-row items-center w-full max-w-md gap-4 md:gap-6">
            {" "}
            {/* Added flex-col for small screens */}
            <p className="text-white font-semibold whitespace-nowrap mr-2 mb-2 md:mb-0">
              {" "}
              {/* Added mb-2 for small screens */}
              Newsletter!
            </p>
            <div className="flex flex-grow">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 w-40 md:w-full py-3 text-black rounded-l-md placeholder-black bg-white"
              />
              <button className="bg-[#157B6C] px-6 py-3 text-white rounded-r-md font-semibold">
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
      <div className="text-center text-white/70 text-xs z-20 relative md:mt-40">
        <p>Privacy Policy &nbsp; | &nbsp; Terms & Conditions</p>
        <p className="mt-1">© 2025 TechDevise. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
