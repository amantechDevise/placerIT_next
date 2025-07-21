"use client";
import { useEffect, useState } from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface ContactUsProps {
  showBorder?: boolean;
}

const Contact_Us = ({ showBorder }: ContactUsProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const aosConfig: AosOptions = {
      duration: 1000,
      once: true,
      offset: 120,
      easing: "ease-in-out",
    };
    AOS.init(aosConfig);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/contact", {
        email,
        name,
        phone,
        message,
      });

      // Reset form
      setEmail("");
      setName("");
      setPhone("");
      setMessage("");

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you for contacting us. We will get back to you soon.",
        confirmButtonColor: "#6366f1",
      });

      router.push("/ContactUs");
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
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
    <section className="relative w-full px-2">
      <div
        className={`relative z-10 max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 px-6 py-4 md:px-10 md:py-16 ${
          showBorder ? "border border-gray-300" : ""
        }`}
      >
        {/* Left Side */}
        <div className="flex flex-col justify-center items-start p-4 md:p-8">
          <img
            src="/images/support_18296255 1.png"
            alt="Support Icon"
            className="w-10 md:w-14 mb-4 animate-bounce"
            data-aos="fade-down"
          />
          <h2 className="text-2xl md:text-[36px] font-bold text-black mb-4">
            Hey! Let’s Talk
          </h2>
          <p className="text-gray-600 text-[12px] md:text-[16px] mb-4 text-start">
            Is your business finding it difficult to flourish in the online
            world? Without proper digital marketing, your website won’t get the
            attention it deserves. Try our results-driven strategies to grow.
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
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[16px] font-bold text-gray-700 mb-1 text-start">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-[16px] font-bold text-gray-700 mb-1 text-start">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-[16px] font-bold text-gray-700 mb-1 text-start">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-[16px] font-bold text-gray-700 mb-1 text-start">
                Your Message
              </label>
              <textarea
                placeholder="Write here..."
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <div className="text-start">
              <button
                type="submit"
                disabled={loading}
                className="w-[200px] text-white font-medium py-4 rounded-lg transition duration-300 hover:opacity-90"
                style={{
                  background: "linear-gradient(to right, #5D3DAF, #5598F7)",
                }}
              >
                {loading ? "Sending..." : "Send Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact_Us;
