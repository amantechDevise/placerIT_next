import Link from 'next/link'

export default function DashSidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-6 fixed top-0 left-0">
      <h2 className="text-2xl font-bold mb-10">Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </li>
         <li>
          <Link href="/it_role" className="hover:text-blue-400 transition">
            It Role
          </Link>
        </li>
         <li>
          <Link href="/request_Hireing" className="hover:text-blue-400 transition">
           Request Hireing
          </Link>
        </li>
         <li>
          <Link href="/contact" className="hover:text-blue-400 transition">
         Contact Us
          </Link>
        </li>
         <li>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Request a Quote
          </Link>
        </li>
      </ul>
    </aside>
  )
}
