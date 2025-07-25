"use client";

import React, { useState, useEffect,useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import QuoteModal from "../_Components/QuoteModal";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
const pathname = usePathname();
  const serviceImages: string[] = [
    "/images/Mask group(1).jpg",
    "/images/Mask group(2).jpg",
    "/images/Mask group(3).jpg",
    "/images/Mask group(4).jpg",
    "/images/Mask group(5).jpg",
    "/images/Mask group(6).jpg",
    "/images/Mask group(7).jpg",
  ];
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === serviceImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsLoading(false); 
  }, [pathname]);

  const navigateWithLoader = (href: string) => {
    setIsLoading(true);
    router.push(href);
  };



  return (
    <div>
  {isLoading && (
  <div className="fixed inset-0 bg-black-300 bg-opacity-60 backdrop-blur-sm z-[9999] flex items-center justify-center">
    <div className="loader border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
  </div>
)}

      <style>{`
        @keyframes scaleUpDown {
          0%, 100% { transform: scale(1); }
          40% { transform: scale(1.1); }
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-lg bg-black/60 shadow-md" : "bg-black"
          }`}
        style={{ minHeight: "80px" }}
      >
        <div className="max-w-7xl mx-auto px-3 md:px-8 flex items-center justify-between md:min-h-[60px] min-h-[40px]">
          <Link href="/"   onClick={() => navigateWithLoader("/")} className="flex items-center md:mt-2 mt-5" >

            <img src="/images/Group 95.svg" alt="Logo" className="md:w-15 md:h-15 w-12 h-12" />
          </Link>

          {/* Desktop Nav */}
          <nav  className="hidden lg:flex gap-x-8 items-center text-white font-bold text-[15px]">
            <Link  href="/" onClick={() => navigateWithLoader("/")} className="hover:text-blue-400">
              Home
            </Link>
           <Link href="/AboutUs" onClick={() => navigateWithLoader("/AboutUs")} className="hover:text-blue-400">About Us</Link>

            {/* Services Dropdown Desktop */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              ref={dropdownRef}
            >

              <Link href="/Services" className="hover:text-blue-400 flex items-center gap-1 focus:outline-none" >
                Services
                <svg
                  className="w-3 h-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {dropdownOpen && (
                <div className="absolute left-[-250px] mt-4 flex bg-white text-black rounded-lg shadow-xl p-4 w-[750px] z-50">
                  <div className="w-1/3">
                    <img
                      src={serviceImages[currentImageIndex]}
                      alt="Service Visual"
                      className="rounded-lg w-full h-60 object-cover transition-all duration-700"
                    />
                  </div>
                  <div className="w-2/3 grid grid-cols-2 gap-4 px-6">
                    {[
                      { href: "/Blockchain", icon: "/images/Group 612.svg", label: "Blockchain" },
                      { href: "/SoftwareConsultancy", icon: "/images/Group 607.svg", label: "Software Consultancy" },
                      { href: "/WebsiteDevelopment", icon: "/images/Group 608.svg", label: "Website Development" },
                      { href: "/DigitalMarketing", icon: "/images/Group 609.svg", label: "Digital Marketing" },
                      { href: "/QualityAssurance", icon: "/images/Group 606.svg", label: "Quality Assurance" },
                      { href: "/IT_Staff", icon: "/images/Group 615.svg", label: "IT Staffing" },
                      { href: "/UXDesign", icon: "/images/Group 610.svg", label: "UI/UX Design" },
                    ].map(({ href, icon, label }) => (
                      <Link href={href} key={label} className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md"  onClick={() => {
                          setDropdownOpen(false);
                          navigateWithLoader(href);
                        }}  >


                        <Image src={icon} alt={label} width={32} height={32} />
                        <p className="text-[14px] font-bold font-raleway">{label}</p>

                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link onClick={() => navigateWithLoader("/ContactUs")} href="/ContactUs" className="hover:text-blue-400" >
              Contact Us
            </Link>

            <button
              onClick={() => setModalOpen(true)}
              style={{
                animation: "scaleUpDown 2s ease-in-out infinite",
                transformOrigin: "center",
              }}
              className="ml-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-5 rounded-md hover:opacity-90"
            >
              Request A Quote
            </button>

          
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav className="lg:hidden bg-black text-white px-5 py-6 space-y-4">
            <Link href="/" onClick={() => setIsOpen(false)}
              className="block hover:text-blue-400 font-semibold text-lg" >

              Home

            </Link>
            <Link href="/AboutUs" onClick={() => setIsOpen(false)}
              className="block hover:text-blue-400 font-semibold text-lg" >

              About Us
            </Link>

            {/* Mobile Services dropdown */}
            <div>

              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="w-full flex md:justify-center lg:justify-between sm:justify-center  justify-center  items-center hover:text-blue-400 font-semibold text-lg focus:outline-none"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileDropdownOpen && (
                <div className="mt-2 space-y-2 pl-4 border-l border-gray-600">
                  {[
                    { href: "/Blockchain", icon: "/images/Group 612.svg", label: "Blockchain" },
                    { href: "/SoftwareConsultancy", icon: "/images/Group 607.svg", label: "Software Consultancy" },
                    { href: "/DigitalMarketing", icon: "/images/Group 609.svg", label: "Digital Marketing" },
                    { href: "/IT_Staff", icon: "/images/Group 615.svg", label: "IT Staffing" },
                    { href: "/QualityAssurance", icon: "/images/Group 606.svg", label: "Quality Assurance" },
                    { href: "/WebsiteDevelopment", icon: "/images/Group 608.svg", label: "Website Development" },
                    { href: "/UXDesign", icon: "/images/Group 610.svg", label: "UI/UX Design" },
                  ].map(({ href, icon, label }) => (
                    <Link href={href} key={label} onClick={() => {
                      setIsOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                      className="flex items-center gap-3 hover:text-blue-400 p-2 rounded-md" >

                      <Image src={icon} alt={label} width={24} height={24} />
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/ContactUs" onClick={() => setIsOpen(false)}
              className="block hover:text-blue-400 font-semibold text-lg" >

              Contact Us
            </Link>

            <button
              onClick={() => {
                setModalOpen(true);
                setIsOpen(false);
              }}
              style={{
                animation: "scaleUpDown 2s ease-in-out infinite",
                transformOrigin: "center",
              }}
              className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-5 rounded-md hover:opacity-90"
            >
              Request A Quote
            </button>

         
          </nav>
        )}
      </header>

      <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Navbar;
