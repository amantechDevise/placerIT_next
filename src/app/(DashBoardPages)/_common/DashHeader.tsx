import Image from 'next/image'
import { useRouter } from "next/navigation";


export default function DashHeader() {
    const router = useRouter();
      const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/Login");
  };
  return (
    <nav className="w-full h-16 bg-gray-900 flex justify-end items-center px-6 shadow-md">
      <div className="w-10 h-10 rounded-full overflow-hidden ">
        <Image
          src="/Group 637.svg"
          alt="User"
          width={40}
          height={40}
          className="object-cover"
        />
      </div>
        <button
              onClick={handleLogout}
              className="ml-4 bg-red-600 text-white py-2 px-5 rounded-md hover:bg-red-700"
            >
              Logout
            </button>
    </nav>
  )
}
