import React from 'react'
import Link from 'next/link'
import { FiPhone, FiUsers, FiFileText, FiClipboard } from 'react-icons/fi'

const DashSidebar: React.FC = () => {
  return (
    <>
      {/* Mobile menu toggle button */}
      <input type="checkbox" id="menu-toggle" className="hidden" />
      <label
        htmlFor="menu-toggle"
        className="fixed top-4 left-4 z-50 cursor-pointer text-white bg-gray-800 p-2 rounded-md md:hidden"
      >
        {/* Hamburger icon */}
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
      </label>

      <aside
        className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white p-6 transform -translate-x-full transition-transform duration-300 ease-in-out
        md:translate-x-0 md:static md:flex-shrink-0"
        style={{ zIndex: 40 }}
      >
        <h2 className="text-2xl font-bold mb-10">Dashboard</h2>
        <ul className="space-y-6">
          <li>
            <Link
              href="/contact"
              className="flex items-center space-x-3 hover:text-blue-400 transition"
            >
              <FiPhone size={20} />
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link
              href="/it_role"
              className="flex items-center space-x-3 hover:text-blue-400 transition"
            >
              <FiUsers size={20} />
              <span>It Role</span>
            </Link>
          </li>
          <li>
            <Link
              href="/request_Hireing"
              className="flex items-center space-x-3 hover:text-blue-400 transition"
            >
              <FiClipboard size={20} />
              <span>Request Hireing</span>
            </Link>
          </li>
          <li>
            <Link
              href="/quoteReq"
              className="flex items-center space-x-3 hover:text-blue-400 transition"
            >
              <FiFileText size={20} />
              <span>Request a Quote</span>
            </Link>
          </li>
        </ul>
      </aside>

      {/* Overlay for mobile */}
      <label
        htmlFor="menu-toggle"
        className="fixed inset-0 bg-black opacity-50 hidden cursor-pointer md:hidden"
      ></label>
    </>
  )
}

export default DashSidebar
