"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import DashBoardLayout from "@/app/(DashBoardPages)/_common/DashBoardLayout";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await axios.get("/api/contact");
        setContacts(response.data.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchContacts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <DashBoardLayout>
      <div className="overflow-x-auto">
        
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 whitespace-nowrap">
            <tr>
                  <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Sr.No
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Message
              </th>
              {/* <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Actions
              </th> */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
            {contacts.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-4 text-center text-sm text-gray-500">
                  No contacts found.
                </td>
              </tr>
            ) : (
              contacts.map(({ _id, name, email, phone, message },index) => (
                <tr key={_id}>
                     <td className="px-4 py-4 text-sm text-slate-900 font-medium">{index + 1}</td>
                  <td className="px-4 py-4 text-sm text-slate-900 font-medium">{name}</td>
                  <td className="px-4 py-4 text-sm text-slate-600 font-medium">{email}</td>
                  <td className="px-4 py-4 text-sm text-slate-600 font-medium">{phone}</td>
                  <td className="px-4 py-4 text-sm text-slate-600 font-medium">{message}</td>
                  {/* <td className="px-4 py-4 text-sm">
                    <button className="cursor-pointer text-blue-600 font-medium mr-4">
                      View
                    </button>
                    <button className="cursor-pointer text-red-600 font-medium">
                      Delete
                    </button>
                  </td> */}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </DashBoardLayout>
  );
};

export default Contact;
