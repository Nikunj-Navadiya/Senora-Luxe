import React from "react";
import assets from "../assets/assets";

const Product = () => {
    const products = [
        {
            id: 1,
            name: "Dresses",
            image: assets.product,
        },
        {
            id: 2,
            name: "Kurtis",
            image: assets.product2,
        },
        {
            id: 3,
            name: "Kurta Sets",
            image: assets.product3,
        },
        {
            id: 4,
            name: "Sarees",
            image: assets.product4,
        },
        {
            id: 5,
            name: "Tops & Tunics",
            image: assets.product5,
        },
        {
            id: 6,
            name: "Jeans & Trousers",
            image: assets.product6,
        },
        {
            id: 7,
            name: "Suits & Dress Materials",
            image: assets.product7,
        },
        {
            id: 8,
            name: "Salwar Kameez",
            image: assets.product8,
        },
        
    ];

    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-12 bg-gradient-to-b from-[#fffaf2] to-[#f8f3ea]">
            {/* Title Section */}
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#b9935a] to-[#e6c77c] bg-clip-text text-transparent tracking-wide">
                    Explore Our Luxury Collections
                </h1>
                <p className="text-gray-600 mt-3 text-base md:text-lg max-w-2xl mx-auto">
                    Step into the world of Senoraluxe, where every piece reflects sophistication, craftsmanship, and timeless beauty designed for modern elegance.
                </p>
            </div>

            {/* Product Grid (4 Columns on Large Screens) */}
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="group bg-white rounded-2xl shadow-lg overflow-hidden"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-[330px] object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5 text-center">
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#b9935a]">
                                {item.name}
                            </h3>
                            <p className="text-[#b9935a] font-medium mt-1">{item.price}</p>
                            <button className="mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#b9935a] to-[#e6c77c] text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
