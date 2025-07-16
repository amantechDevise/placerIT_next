import React from "react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#0000002e] bg-opacity-50 flex justify-center items-center z-50 p-6">
      <div className="bg-white rounded-lg w-full max-w-6xl p-10 relative flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl font-bold bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] rounded-full w-8 h-8 flex items-center justify-center hover:opacity-90 transition"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Left Side - Image */}
        <div className="flex-1 flex justify-center items-center mb-6 md:mb-0 md:pr-10">
          <img
            src="/images/rafiki.svg"
            alt="Illustration"
            className="max-h-96 w-auto"
          />
        </div>

        {/* Right Side - Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6">Request a Quote</h2>
          <p className="mb-8 text-gray-700">
            Feel the quality by using this full featured quoting tool!
          </p>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                className="block text-gray-700 font-semibold mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter Name"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-gray-700 font-semibold mb-1"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Email Address"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Service */}
            <div>
              <label
                className="block text-gray-700 font-semibold mb-1"
                htmlFor="service"
              >
                Service Required
              </label>
              <select
                id="service"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="0">Software Consultancy</option>
                <option value="1">Website Development</option>
                <option value="2">QA / Testing</option>
                <option value="3">Digital Marketing</option>
                <option value="4">Blockchain Development</option>
                <option value="5">UI / UX Design</option>
                <option value="6">Others</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-8 rounded hover:opacity-90 transition"
            >
              Send Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
