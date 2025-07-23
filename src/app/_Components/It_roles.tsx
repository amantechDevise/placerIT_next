"use client";
import React, { useEffect, useState } from "react";
import ModalForm from "./It_RoleForm";

interface Role {
  _id: string;
  name: string;
  status: boolean;
}

const IT_Roles = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 roles initially
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await fetch("/api/itstaff");
        const result = await response.json();
        if (result?.data) {
          setRoles(result.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchRoles();
  }, []);

  const handleRoleClick = (role: Role) => {
    setSelectedRole(role);
    setShowModal(true);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6); // Show 6 more
  };

  const visibleRoles = roles.slice(0, visibleCount);

  return (
    <section className="py-8 md:py-14 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-[40px] font-extrabold text-gray-900 font-raleway">
        We Staff IT Roles Across
      </h2>

      <h3 className="text-3xl md:text-[40px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] mt-1 font-raleway">
        Any Industry
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 max-w-5xl mx-auto">
        {visibleRoles.map((role) => (
          <div
            key={role._id}
            className="border-2 rounded-lg py-4 px-6 flex justify-between items-center hover:shadow-lg transition cursor-pointer"
            onClick={() => handleRoleClick(role)}
          >
            <span className="md:text-[20px] text-[14px] font-bold font-raleway">{role.name}</span>
            <img src="/images/Arrow 1.png" alt="" />
          </div>
        ))}
      </div>

      {/* Show button only if there are more roles to show */}
      {visibleCount < roles.length && (
        <button
          onClick={handleLoadMore}
          className="mt-10 bg-gradient-to-r from-[#5D3DAF] to-[#5598F7] text-white font-semibold py-2 px-6 rounded transition font-raleway"
        >
          More Industries
        </button>
      )}

      {showModal && selectedRole && (
        <ModalForm role={selectedRole} onClose={() => setShowModal(false)} />
      )}
    </section>
  );
};

export default IT_Roles;
