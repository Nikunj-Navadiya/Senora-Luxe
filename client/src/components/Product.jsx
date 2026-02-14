import React from "react";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

const Product = () => {


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

                <Link to='/dresses'>
                    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="overflow-hidden">
                            <img
                                src={assets.product}
                                className="w-full  object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Dresses
                            </h3>
                            <button className="mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#b9935a] to-[#e6c77c] text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                View Details
                            </button>
                        </div>
                    </div>
                </Link>


                <Link to='/'>
                    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="overflow-hidden">
                            <img
                                src={assets.product2}
                                className="w-full  object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Kurtis
                            </h3>
                            <button className="mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#b9935a] to-[#e6c77c] text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                View Details
                            </button>
                        </div>
                    </div>
                </Link>


                <Link to='/'>
                    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="overflow-hidden">
                            <img
                                src={assets.product3}
                                className="w-full  object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Kurta Sets
                            </h3>
                            <button className="mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#b9935a] to-[#e6c77c] text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                View Details
                            </button>
                        </div>
                    </div>
                </Link>


                <Link to='/'>
                    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="overflow-hidden">
                            <img
                                src={assets.product4}
                                className="w-full  object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Sarees
                            </h3>
                            <button className="mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#b9935a] to-[#e6c77c] text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                View Details
                            </button>
                        </div>
                    </div>
                </Link>


                <Link to='/'>
                    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="overflow-hidden">
                            <img
                                src={assets.product5}
                                className="w-full object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Tops & Tunics
                            </h3>
                            <button className="mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#b9935a] to-[#e6c77c] text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                View Details
                            </button>
                        </div>
                    </div>
                </Link>


                <Link to='/'>
                    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="overflow-hidden">
                            <img
                                src={assets.product6}
                                className="w-full object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Jeans & Trousers
                            </h3>
                            <button className="mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#b9935a] to-[#e6c77c] text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                View Details
                            </button>
                        </div>
                    </div>
                </Link>


                <Link to='/'>
                    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="overflow-hidden">
                            <img
                                src={assets.product7}
                                className="w-full  object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Suits & Dress Materials
                            </h3>
                            <button className="mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#b9935a] to-[#e6c77c] text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                View Details
                            </button>
                        </div>
                    </div>
                </Link>


                <Link to='/'>
                    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="overflow-hidden">
                            <img
                                src={assets.product8}
                                className="w-full object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Salwar Kameez
                            </h3>
                            <button className="mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#b9935a] to-[#e6c77c] text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                View Details
                            </button>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Product;
