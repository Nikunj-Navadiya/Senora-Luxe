import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 lg:ml-56">
        <Header toggleSidebar={toggleSidebar} />

        <main className="p-4 bg-gray-100 min-h-[calc(100vh-56px)]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
