import React from "react";
import { FaBars } from "react-icons/fa";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="w-full fixed h-16 bg-white shadow flex items-center justify-between px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-gray-600 text-xl"
        >
          <FaBars />
        </button>
        <h1 className="text-xl font-bold text-gray-800">
          Krishnas Jewellers
        </h1>
      </div>

      <button className="px-4 py-1 border rounded text-gray-700 hover:bg-gray-100">
        Login
      </button>
    </header>
  );
};

export default Header;
