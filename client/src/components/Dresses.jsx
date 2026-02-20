import React, { useState } from "react";
import assets from "../assets/assets";

const productData = [
  {
    id: 1,
    name: "Floral Summer Dress",
    category: "Casual",
    fabric: "Cotton",
    price: 999,
    image: assets.product2
  },
  {
    id: 2,
    name: "Party Gown",
    category: "Party",
    fabric: "Silk",
    price: 2499,
    image: assets.product2
  },
  {
    id: 3,
    name: "Wedding Lehenga",
    category: "Wedding",
    fabric: "Net",
    price: 5999,
    image: assets.product2
  },
  {
    id: 4,
    name: "Denim One Piece",
    category: "Casual",
    fabric: "Denim",
    price: 1499,
    image: assets.product2
  }
];

const Dresses = () => {
  const [maxPrice, setMaxPrice] = useState(6000);
  const [sortOrder, setSortOrder] = useState("");
  const [selectedFabric, setSelectedFabric] = useState("All");

  // 🔹 Dynamic Fabric List
  const fabricTypes = ["All", ...new Set(productData.map(p => p.fabric))];

  // 🔹 Filtering First
  let filteredProducts = productData.filter(product =>
    product.price <= maxPrice &&
    (selectedFabric === "All" || product.fabric === selectedFabric)
  );

  // 🔹 Sorting After Filtering
  if (sortOrder === "low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-12 bg-gradient-to-b from-[#fffaf2] to-[#f8f3ea]">

      <h1 className="text-center mb-5 text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#b9935a] to-[#e6c77c] bg-clip-text text-transparent tracking-wide">
        All Dresses Collection
      </h1>

      {/* Filters */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        {/* Sort */}
        <div>
          <label className="block mb-2 font-medium">
            Sort By Price
          </label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full border p-2 rounded-lg"
          >
            <option value="">Default</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>

        {/* Fabric */}
        <div>
          <label className="block mb-2 font-medium">
            Fabric Type
          </label>
          <select
            value={selectedFabric}
            onChange={(e) => setSelectedFabric(e.target.value)}
            className="w-full border p-2 rounded-lg"
          >
            {fabricTypes.map((fabric, index) => (
              <option key={index} value={fabric}>
                {fabric}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block mb-2 font-medium">
            Max Price: ₹{maxPrice}
          </label>
          <input
            type="range"
            min="500"
            max="6000"
            step="500"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full"
          />
        </div>

      </div>

      {/* Products */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover rounded-lg"
              />
              <h2 className="mt-4 text-lg font-medium">
                {product.name}
              </h2>
              <p className="text-gray-500">{product.category}</p>
              <p className="text-[#b9935a] font-semibold mt-2">
                ₹{product.price}
              </p>
              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found
          </p>
        )}
      </div>
    </div>
  );
};

export default Dresses;
