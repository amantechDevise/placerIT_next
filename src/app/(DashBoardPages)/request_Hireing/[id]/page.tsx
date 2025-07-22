"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import DashBoardLayout from "../../_common/DashBoardLayout";
const hireTypeMap = {
    0: "Full-time",
    1: "Part-time",
    2: "Contract",
};

const positionMap = {
    0: "US",
    1: "Canada",
    2: "UK",
    3: "Others",
};
export default function HireRoleDetailsPage() {
    const { id } = useParams();
    const [hireRole, setHireRole] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        fetch(`/api/hire_roles/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setHireRole(result.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="text-center py-10 text-gray-500">Loading...</p>;
    if (!hireRole) return <p className="text-center py-10 text-red-500">No data found</p>;

    return (
        <DashBoardLayout>
            <div className="max-w-4xl mx-auto px-4 py-10">
  <h1 className="text-2xl font-bold mb-6 text-gray-800">Hire Role Details</h1>
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-300 rounded-md">
      <tbody className="bg-white divide-y divide-gray-200">
        <TableRow label="First Name" value={hireRole.first_name} />
        <TableRow label="Last Name" value={hireRole.last_name} />
        <TableRow label="Email" value={hireRole.email} />
        <TableRow label="Phone" value={hireRole.phone} />
        <TableRow label="Role Type" value={hireRole.just_confirm === 0 ? "Employer" : "Looking for Job"} />
        <TableRow label="Company Name" value={hireRole.company_name} />
        <TableRow label="Job Title" value={hireRole.job_title} />
        <TableRow
  label="Type of Hire"
  value={hireTypeMap[hireRole.type_of_hire as keyof typeof hireTypeMap] || "Unknown"}
/>
        <TableRow label="Number of Jobs" value={hireRole.number_of_job} />
        <TableRow label="Help" value={hireRole.help || "N/A"} />
       <TableRow
  label="Position"
  value={positionMap[hireRole.position as keyof typeof positionMap] || "Unknown"}
/>
        <TableRow label="Status" value={hireRole.status === 1 ? "Active" : "Inactive"} />
    {hireRole.image && (
  <tr>
    <td className="p-4 font-medium text-gray-700">Document</td>
    <td className="p-4">
      {hireRole.image.endsWith(".pdf") ? (
        <a
          href={hireRole.image}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 hover:underline"
        >
          {/* Simple thumbnail icon or embedded PDF preview */}
          <div className="w-40 h-52 border rounded flex items-center justify-center bg-gray-100 text-gray-700 text-sm">
            PDF Preview
          </div>
        </a>
      ) : (
        <img src={hireRole.image} alt="Hire Role" className="w-40 rounded border" />
      )}
    </td>
  </tr>
)}

      </tbody>
    </table>
  </div>
</div>

        </DashBoardLayout>
    );
}

function TableRow({ label, value }: { label: string; value: string | number }) {
    return (
        <tr>
            <td className="p-4 font-medium text-gray-700 w-1/3">{label}</td>
            <td className="p-4 text-gray-800">{value}</td>
        </tr>
    );
}
