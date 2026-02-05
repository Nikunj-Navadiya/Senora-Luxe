import React from "react";
import { FaUsers, FaShoppingCart, FaRupeeSign, FaBox } from "react-icons/fa";

const Home = () => {
  const stats = [
    {
      title: "Total Orders",
      value: "1,245",
      icon: <FaShoppingCart />,
      color: "bg-blue-500",
    },
    {
      title: "Total Users",
      value: "820",
      icon: <FaUsers />,
      color: "bg-green-500",
    },
    {
      title: "Total Revenue",
      value: "₹2,45,000",
      icon: <FaRupeeSign />,
      color: "bg-purple-500",
    },
    {
      title: "Products",
      value: "156",
      icon: <FaBox />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Dashboard Overview
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-5 flex items-center justify-between"
          >
            <div>
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h2 className="text-2xl font-bold text-gray-800 mt-1">
                {item.value}
              </h2>
            </div>
            <div
              className={`text-white p-4 rounded-full text-xl ${item.color}`}
            >
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3 text-gray-600">
          <li>🛒 New order placed by Rahul Patel</li>
          <li>👤 New user registered: Priya Shah</li>
          <li>📦 Product updated: Gold Ring</li>
          <li>💰 Payment received ₹12,500</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
