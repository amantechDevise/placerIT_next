"use client";
import Layout from "../_common/Layout";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2';

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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

    // Show success message
    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thank you for contacting us. We will get back to you soon.',
      confirmButtonColor: '#6366f1', // Indigo color
    });

    router.push("/Contact");
  } catch (error: any) {
    console.error("Error sending contact:", error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error?.response?.data?.message || "Something went wrong. Please try again.",
      confirmButtonColor: '#ef4444', // Red color
    });
  } finally {
    setLoading(false);
  }
};


  return (
    <Layout>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            {/* Image and Info */}
            <div className="lg:mb-0 mb-10">
              <div className="group w-full h-full relative">
                <img
                  src="https://pagedone.io/asset/uploads/1696488602.png"
                  alt="ContactUs"
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl object-cover"
                />
                <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                  Contact us
                </h1>
                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white rounded-lg p-6 block">
                    {/* Phone */}
                    <div className="flex items-center mb-6">
                      📞
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        470-601-1911
                      </h5>
                    </div>

                    {/* Email */}
                    <div className="flex items-center mb-6">
                      📧
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        techdevise@gmail.com
                      </h5>
                    </div>

                    {/* Address */}
                    <div className="flex items-center">
                      📍
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        F - 268, Industrial Area, Sector 74, Punjab 160071
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl"
            >
              <h2 className="text-indigo-600 text-4xl font-semibold mb-11">
                Send Us A Message
              </h2>
              <input
                type="text"
                className="w-full h-12 mb-6 rounded-full border border-gray-200 pl-4"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                className="w-full h-12 mb-6 rounded-full border border-gray-200 pl-4"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                className="w-full h-12 mb-6 rounded-full border border-gray-200 pl-4"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                className="w-full h-12 mb-6 rounded-full border border-gray-200 pl-4"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 text-white font-semibold rounded-full transition-all duration-300 bg-indigo-600 hover:bg-indigo-800"
              >
                {loading ? "Sending..." : "Send"}
              </button>

              {error && (
                <p className="text-red-500 text-sm mt-4">{error}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
