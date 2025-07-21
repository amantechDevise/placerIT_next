"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashBoardLayout from "@/app/(DashBoardPages)/_common/DashBoardLayout";
import Main from "@/app/(DashBoardPages)/_common/Main";

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);  // loading state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
 console.log(token);
 
    if (!token) {
      router.push("/Login");
    } else {
      setIsAuthenticated(true);
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Loading dashboard...</h2>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Redirecting...
  }

  return (
    <DashBoardLayout>
      <Main />
    </DashBoardLayout>
  );
};

export default DashboardPage;
