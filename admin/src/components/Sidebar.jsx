import React from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaHome, FaBox, FaShoppingCart, FaUsers } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Overlay (Mobile) */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-56 bg-gray-900 text-white z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">Admin Panel</h2>
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-xl"
          >
            <FaTimes />
          </button>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-2">
          <Link className="flex items-center gap-3 p-2 rounded hover:bg-gray-700" to="/">
            <FaHome /> Dashboard
          </Link>
          <Link className="flex items-center gap-3 p-2 rounded hover:bg-gray-700" to="/products">
            <FaBox />Add Products
          </Link>
          <Link className="flex items-center gap-3 p-2 rounded hover:bg-gray-700" to="/products">
            <FaBox />List Products
          </Link>
          <Link className="flex items-center gap-3 p-2 rounded hover:bg-gray-700" to="/orders">
            <FaShoppingCart /> Orders
          </Link>
          <Link className="flex items-center gap-3 p-2 rounded hover:bg-gray-700" to="/customers">
            <FaUsers /> Customers
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
