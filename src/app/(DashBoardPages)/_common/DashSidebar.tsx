"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiPhone, FiUsers, FiFileText, FiClipboard } from "react-icons/fi";

const DashSidebar: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/Login");
    } else {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [router]);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    const token = localStorage.getItem("token");
    if (!token) {
      e.preventDefault();
      router.push("/Login");
    } else {
      setMenuOpen(false);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      {/* Mobile menu toggle button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 left-4 z-50 cursor-pointer text-white bg-gray-800 p-2 rounded-md md:hidden"
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 transform transition-transform duration-300 ease-in-out z-40
        md:translate-x-0
        ${menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <h2 className="text-2xl font-bold mb-10">Dashboard</h2>
        <ul className="space-y-6">
          <li>
            <Link
              href="/contact"
              className="flex items-center space-x-3 hover:text-blue-400 transition"
              onClick={(e) => handleLinkClick(e, "/contact")}
            >
              <FiPhone size={20} />
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link
              href="/it_role"
              className="flex items-center space-x-3 hover:text-blue-400 transition"
              onClick={(e) => handleLinkClick(e, "/it_role")}
            >
              <FiUsers size={20} />
              <span>It Role</span>
            </Link>
          </li>
          <li>
            <Link
              href="/request_Hireing"
              className="flex items-center space-x-3 hover:text-blue-400 transition"
              onClick={(e) => handleLinkClick(e, "/request_Hireing")}
            >
              <FiClipboard size={20} />
              <span>Request Hireing</span>
            </Link>
          </li>
          <li>
            <Link
              href="/quoteReq"
              className="flex items-center space-x-3 hover:text-blue-400 transition"
              onClick={(e) => handleLinkClick(e, "/quoteReq")}
            >
              <FiFileText size={20} />
              <span>Request a Quote</span>
            </Link>
          </li>
        </ul>
      </aside>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default DashSidebar;