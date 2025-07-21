"use client";
import DashSidebar from "./DashSidebar";
import DashHeader from "./DashHeader";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar (takes fixed width) */}
      <div className="w-64 bg-white border-r">
        <DashSidebar />
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-1 min-h-0">
        <DashHeader />

        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashBoardLayout;
