"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import DashBoardLayout from "@/app/(DashBoardPages)/_common/DashBoardLayout";
import Swal from "sweetalert2";
const serviceOptions = [
  "Software Consultancy",
  "Website Development",
  "QA / Testing",
  "Digital Marketing",
  "Blockchain Development",
  "UI / UX Design",
  "Others"
];
interface QuoteRequest {
  _id: string;
  name: string;
  email: string;
  ServiceRequired: number;
}
const QuoteReq = () => {
 const [quoteReqs, setQuoteReq] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await axios.get("/api/quoteReq");
        setQuoteReq(response.data.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchContacts();
  }, []);
  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This role will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`/api/quoteReq?id=${id}`);
        setQuoteReq((prevRoles) => prevRoles.filter((quoteReqs) => quoteReqs._id !== id));

        Swal.fire("Deleted!", "The role has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting role:", error);
        Swal.fire("Error", "Failed to delete the role.", "error");
      }
    }
  };

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
                Service Required
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
            {quoteReqs.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-4 text-center text-sm text-gray-500">
                  No Quote Request found.
                </td>
              </tr>
            ) : (
              quoteReqs.map(({ _id, name, email, ServiceRequired }, index) => (
                <tr key={_id}>
                  <td className="px-4 py-4 text-sm text-slate-900 font-medium">{index + 1}</td>
                  <td className="px-4 py-4 text-sm text-slate-900 font-medium">{name}</td>
                  <td className="px-4 py-4 text-sm text-slate-600 font-medium">{email}</td>
                  <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                    {serviceOptions[ServiceRequired]}
                  </td>
                  <td className="px-4 py-4 text-sm">
                    <button
                      onClick={() => handleDelete(_id)}
                      className="cursor-pointer text-red-600 font-medium"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </DashBoardLayout>
  );
};

export default QuoteReq;
