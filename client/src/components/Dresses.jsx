import React, { useState } from "react";

const productData = [
  {
    id: 1,
    name: "Floral Summer Dress",
    category: "Casual",
    price: 999,
    image: "https://via.placeholder.com/300"
  },
  {
    id: 2,
    name: "Party Gown",
    category: "Party",
    price: 2499,
    image: "https://via.placeholder.com/300"
  },
  {
    id: 3,
    name: "Wedding Lehenga",
    category: "Wedding",
    price: 5999,
    image: "https://via.placeholder.com/300"
  },
  {
    id: 4,
    name: "Denim One Piece",
    category: "Casual",
    price: 1499,
    image: "https://via.placeholder.com/300"
  }
];

const Dresses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrice, setMaxPrice] = useState(6000);

  const filteredProducts = productData.filter((product) => {
    return (
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.price <= maxPrice &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-12 bg-gradient-to-b from-[#fffaf2] to-[#f8f3ea]">
      
      {/* Title */}
      <h1 className="text-3xl font-semibold mb-8 text-center">
        All Dresses Collection
      </h1>

      {/* Filters */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        {/* Category Filter */}
        <select
          className="p-3 border rounded-lg"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Category</option>
          <option value="Casual">Casual</option>
          <option value="Party">Party</option>
          <option value="Wedding">Wedding</option>
        </select>

        {/* Search */}
        <input
          type="text"
          placeholder="Search dress..."
          className="p-3 border rounded-lg"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Price Filter */}
        <div>
          <label className="block mb-2">
            Max Price: ₹{maxPrice}
          </label>
          <input
            type="range"
            min="500"
            max="6000"
            step="500"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      {/* Products Grid */}
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
                className="w-full h-60 object-cover rounded-lg"
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
