"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await axios.post("/api/login", { email, password });
      localStorage.setItem("token", res.data.token);
      router.push("/dashboard");
    } catch (error: any) {
      console.error("Login error:", error);
      setError(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url(https://i.postimg.cc/vTXTYy2P/login-bg.jpg)",
      }}
    >
      <div className="inline-flex items-center justify-center p-4 h-full w-full">
        <div className="w-full sm:min-w-[460px]">
          <div className="bg-black/40 backdrop-blur-3xl p-6 rounded-lg w-full h-full lg:max-w-[480px] z-10">
            <div className="flex flex-col gap-2 mt-20">
              <div className="mb-8 text-center">
                <a className="flex justify-center">
                  <img src="/images/Group 95.svg" alt="logo" className="h-25" />
                </a>
              </div>

              <h4 className="text-white text-2xl font-semibold mb-4">Sign In</h4>

              {error && (
                <p className="text-red-400 bg-red-800/20 p-2 rounded mb-4 text-sm">
                  {error}
                </p>
              )}

              <form
                onSubmit={handleSubmit}
                className="p-6 rounded-xl shadow-md w-full max-w-md"
              >
                <div className="mb-4">
                  <label
                    htmlFor="emailaddress"
                    className="block text-base font-semibold text-gray-200 mb-2"
                  >
                    Email address
                  </label>
                  <input
                    className="block w-full rounded py-1.5 px-3 bg-transparent border-white/10 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
                    type="email"
                    id="emailaddress"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-base font-semibold text-gray-200 mb-2"
                  >
                    Password
                  </label>
                  <input
                    className="block w-full rounded py-1.5 px-3 bg-transparent border-white/10 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="text-center mt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full px-6 py-2 backdrop-blur-2xl text-white rounded-lg transition-all duration-500 ${
                      loading
                        ? "bg-gray-500/50 cursor-not-allowed"
                        : "bg-white/20 hover:bg-blue-600/60"
                    }`}
                  >
                    {loading ? "Logging in..." : "Log In"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
