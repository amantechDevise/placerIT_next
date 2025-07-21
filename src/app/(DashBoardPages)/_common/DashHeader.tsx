import Image from 'next/image'

export default function DashHeader() {
  return (
    <nav className="w-full h-16 bg-gray-900 flex justify-end items-center px-6 shadow-md">
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
        <Image
          src="/user.jpg"
          alt="User"
          width={40}
          height={40}
          className="object-cover"
        />
      </div>
    </nav>
  )
}
