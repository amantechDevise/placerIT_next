"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Main from "../_common/Main";
import Layout from "../_common/Layout";

const DashboardPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/Login");  
    } else {
      setIsAuthenticated(true); 
    }
  }, [router]);

  if (!isAuthenticated) {
    return <div>Loading...</div>;  
  }

  return (
 
      <Layout>
      <Main />
    </Layout>
    
  );
};

export default DashboardPage;
