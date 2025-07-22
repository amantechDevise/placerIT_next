"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import DashBoardLayout from "@/app/(DashBoardPages)/_common/DashBoardLayout";
import Swal from "sweetalert2";

interface HireRole {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  help: string;
  image: string;
  It_role_id?: {
    name: string;
    [key: string]: any;
  };
}

const Request_Hireing = () => {
  const [hire_roles, setHire_roles] = useState<HireRole[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await axios.get("/api/hire_roles");
        setHire_roles(response.data.data);
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
        await axios.delete(`/api/hire_roles?id=${id}`);
        setHire_roles((prevRoles) => prevRoles.filter((role) => role._id !== id));
        Swal.fire("Deleted!", "The role has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting role:", error);
        Swal.fire("Error", "Failed to delete the role.", "error");
      }
    }
  };

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
                Role Name
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Full Name
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
              <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Image
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
            {hire_roles.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-4 py-4 text-center text-sm text-gray-500">
                  No contacts found.
                </td>
              </tr>
            ) : (
              hire_roles.map((item, index) => (
                <tr key={item._id}>
                  <td className="px-4 py-4 text-sm text-slate-900 font-medium">{index + 1}</td>
                  <td className="px-4 py-4 text-sm text-slate-900 font-medium">{item.It_role_id?.name || "N/A"}</td>
                  <td className="px-4 py-4 text-sm text-slate-900 font-medium">
                    {item.first_name} {item.last_name}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-600 font-medium">{item.email}</td>
                  <td className="px-4 py-4 text-sm text-slate-600 font-medium">{item.phone}</td>
                  <td className="px-4 py-4 text-sm text-slate-600 font-medium">{item.help}</td>
                  <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                    {item.image?.endsWith(".pdf") ? (
                      <a
                        href={item.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        View PDF
                      </a>
                    ) : (
                      <img
                        src={item.image}
                        alt="profile"
                        className="w-15 h-15 rounded-full object-cover"
                      />
                    )}

                  </td>
                  <td className="px-4 py-4 text-sm">
                    <button
                      className="text-blue-600 mr-4"
                      onClick={() => router.push(`/request_Hireing/${item._id}`)}
                    >
                      View
                    </button>
                    <button
                      className="cursor-pointer text-red-600 font-medium"
                      onClick={() => handleDelete(item._id)}
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

export default Request_Hireing;
