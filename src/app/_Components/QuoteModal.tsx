"use client";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState<number | "">("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !service) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill out all fields before submitting.",
        confirmButtonColor: "#f59e0b",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("/api/quoteReq", {
        email,
        name,
        ServiceRequired: service,
      });

      // Reset form
      setEmail("");
      setName("");
      setService("");

      Swal.fire({
        icon: "success",
        title: "Request Submitted!",
        text: "We’ll get back to you shortly.",
        confirmButtonColor: "#6366f1",
      });

      onClose(); // Close modal after success
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text:
          error?.response?.data?.message ||
          "Something went wrong. Please try again.",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setLoading(false);
    }
  };

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
          <h2 className="text-3xl font-bold mb-6 font-raleway">Request a Quote</h2>
          <p className="mb-8 text-gray-700 font-raleway">
            Feel the quality by using this full featured quoting tool!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 text-start font-semibold mb-1 font-raleway" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1 text-start font-raleway" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1 text-start font-raleway" htmlFor="service">
                Service Required
              </label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 font-raleway"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value={0}>Software Consultancy</option>
                <option value={1}>Website Development</option>
                <option value={2}>QA / Testing</option>
                <option value={3}>Digital Marketing</option>
                <option value={4}>Blockchain Development</option>
                <option value={5}>UI / UX Design</option>
                <option value={6}>Others</option>
              </select>
            </div>

         <div className="flex justify-start">
  <button
    type="submit"
    className="bg-gradient-to-r from-[#5D3DAF] to-[#5598F7] text-white py-3 px-8 rounded-xl hover:opacity-90 transition"
    disabled={loading}
  >
    {loading ? "Sending..." : "Send Now"}
  </button>
</div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
