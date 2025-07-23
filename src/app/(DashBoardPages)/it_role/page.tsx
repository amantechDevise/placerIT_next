"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import DashBoardLayout from "@/app/(DashBoardPages)/_common/DashBoardLayout";
import Swal from "sweetalert2";
type Role = {
    _id: string;
    name: string;
    status: boolean;
};

const ItRole = () => {
    const [role, setRoles] = useState<Role[]>([]);
    const [loading, setLoading] = useState(true);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newRoleName, setNewRoleName] = useState("");
    const [newRoleStatus, setNewRoleStatus] = useState<boolean>(true); // default true

    useEffect(() => {
        async function fetchRoles() {
            try {
                const response = await axios.get("/api/itstaff");
                setRoles(response.data.data);
            } catch (error) {
                console.error("Error fetching roles:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchRoles();
    }, []);

    const openModal = () => {
        setNewRoleName("");
        setNewRoleStatus(true); // Reset status to true
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const handleAddRole = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/itstaff", {
                name: newRoleName,
                status: newRoleStatus,
            });

            setRoles((prevRoles) => [...prevRoles, response.data.data]);

            setNewRoleName("");
            setNewRoleStatus(true);
            closeModal();
        } catch (error) {
            console.error("Error adding role:", error);
            alert("Failed to add role. Please try again.");
        }
    };

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
                await axios.delete(`/api/itstaff?id=${id}`);
                setRoles((prevRoles) => prevRoles.filter((role) => role._id !== id));

                Swal.fire("Deleted!", "The role has been deleted.", "success");
            } catch (error) {
                console.error("Error deleting role:", error);
                Swal.fire("Error", "Failed to delete the role.", "error");
            }
        }
    };
    const handleToggleStatus = async (id: string, currentStatus: boolean) => {
  const result = await Swal.fire({
    title: `Are you sure you want to ${currentStatus ? "deactivate" : "activate"} this role?`,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: `Yes, ${currentStatus ? "deactivate" : "activate"}`,
    cancelButtonText: "Cancel",
  });

  if (result.isConfirmed) {
    try {
      const response = await axios.patch("/api/itstaff", {
        id,
        status: !currentStatus,
      });

      // Update local state
      setRoles((prevRoles) =>
        prevRoles.map((role) =>
          role._id === id ? { ...role, status: !currentStatus } : role
        )
      );

      Swal.fire("Success!", "Role status updated successfully.", "success");
    } catch (error) {
      console.error("Error updating status:", error);
      Swal.fire("Error", "Failed to update the role status.", "error");
    }
  }
};



    return (
        <DashBoardLayout>
            <div className="overflow-x-auto">
                <div className="mb-4 flex justify-end">
                    <button
                        onClick={openModal}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Add
                    </button>
                </div>

                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100 whitespace-nowrap">
                        <tr>
                            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                                Sr No
                            </th>
                            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
                        {role.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-4 py-4 text-center text-sm text-gray-500">
                                    No IT Roles found.
                                </td>
                            </tr>
                        ) : (
                            role.filter((r): r is Role => !!r && typeof r === "object" && "_id" in r).map(({ _id, name, status }, index) => (
                                <tr key={_id}>
                                    <td className="px-4 py-4 text-sm text-slate-900 font-medium">{index + 1}</td>
                                    <td className="px-4 py-4 text-sm text-slate-900 font-medium">{name}</td>
                                   <td className="px-4 py-4 text-sm text-slate-600 font-medium">
  <button
    onClick={() => handleToggleStatus(_id, status)}
    className={`px-3 py-1 rounded ${
      status ? "bg-green-500 text-white" : "bg-gray-400 text-white"
    } hover:opacity-80 transition`}
  >
    {status ? "Active" : "Inactive"}
  </button>
</td>
                                    <td className="px-4 py-4 text-sm">
                                        {/* <button className="cursor-pointer text-blue-600 font-medium mr-4">View</button> */}
                                        <button
                                            className="cursor-pointer text-red-600 font-medium"
                                            onClick={() => handleDelete(_id)}
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

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
                        <h2 className="text-xl font-semibold mb-4">Add New IT Role</h2>
                        <form onSubmit={handleAddRole} className="space-y-4">
                            <div>
                                <label className="block mb-1 font-medium">Name</label>
                                <input
                                    type="text"
                                    value={newRoleName}
                                    onChange={(e) => setNewRoleName(e.target.value)}
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>

                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="status"
                                    checked={newRoleStatus}
                                    onChange={(e) => setNewRoleStatus(e.target.checked)}
                                    className="h-5 w-5"
                                />
                                <label htmlFor="status" className="text-sm font-medium">
                                    Active
                                </label>
                            </div>

                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </DashBoardLayout>
    );
};

export default ItRole;
