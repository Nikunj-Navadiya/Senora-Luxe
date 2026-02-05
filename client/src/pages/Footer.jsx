import React, { useState } from "react";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const [open, setOpen] = useState(null);

    const toggle = (section) => {
        setOpen(open === section ? null : section);
    };

    const closeMenu = () => {
        setOpen(null);
    };

    return (
        <footer className="bg-gray-100 text-gray-900">
            <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pt-10 lg:pt-14">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-10">

                    {/* Logo */}
                    <div>
                        <Link to="/">
                            <img src={assets.logo1} alt="Krishnas Jewellers" className="w-40 mb-4" />
                        </Link>
                        <p className="text-lg leading-6">
                            Explore stunning collections of handcrafted gold, diamond, and silver jewellery.
                        </p>
                    </div>


                    {/* Categories */}
                    <div>
                        <h3
                            onClick={() => toggle("cat")}
                            className="text-xl font-semibold mb-2 lg:mb-4
               cursor-pointer lg:cursor-default
               bg-white lg:bg-transparent
               p-3 lg:p-0 rounded-lg
               shadow lg:shadow-none
               flex justify-between items-center"
                        >
                            Categories
                            <span className="ml-2 block lg:hidden">
                                <FontAwesomeIcon icon={open === "cat" ? faAngleUp : faAngleDown} />
                            </span>
                        </h3>

                        {/* Mobile View – Box UI */}
                        <div
                            className={`lg:hidden ${open === "cat" ? "block" : "hidden"}
                bg-white border border-gray-300 rounded-lg p-3`}
                        >
                            <ul className="space-y-2 text-lg text-gray-800">
                                <li onClick={closeMenu} className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Dresses
                                </li>
                                <li onClick={closeMenu} className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Kurtis
                                </li>
                                <li onClick={closeMenu} className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Kurta Sets
                                </li>
                                <li onClick={closeMenu} className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Sarees
                                </li>
                                <li onClick={closeMenu} className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Ethnic Wear
                                </li>
                                <li onClick={closeMenu} className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Tops & Tunics
                                </li>
                                <li onClick={closeMenu} className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Jeans & Trousers
                                </li>
                                <li onClick={closeMenu} className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Suits & Dress Materials
                                </li>
                            </ul>
                        </div>

                        {/* Desktop View – Simple List */}
                        <ul className="hidden lg:block space-y-2 text-lg">
                            <li className="cursor-pointer hover:text-gray-900">Dresses</li>
                            <li className="cursor-pointer hover:text-gray-900">Kurtis</li>
                            <li className="cursor-pointer hover:text-gray-900">Kurta Sets</li>
                            <li className="cursor-pointer hover:text-gray-900">Sarees</li>
                            <li className="cursor-pointer hover:text-gray-900">Ethnic Wear</li>
                            <li className="cursor-pointer hover:text-gray-900">Tops & Tunics</li>
                            <li className="cursor-pointer hover:text-gray-900">Jeans & Trousers</li>
                            <li className="cursor-pointer hover:text-gray-900">Suits & Dress Materials</li>
                        </ul>
                    </div>


                    {/* Customer Care */}
                    <div>
                        <h3
                            onClick={() => toggle("care")}
                            className="text-xl font-semibold mb-2 lg:mb-4
               cursor-pointer lg:cursor-default
               bg-white lg:bg-transparent
               p-3 lg:p-0 rounded-lg
               shadow lg:shadow-none
               flex justify-between items-center"
                        >
                            Customer Care
                            <span className="ml-2 block lg:hidden">
                                <FontAwesomeIcon icon={open === "care" ? faAngleUp : faAngleDown} />
                            </span>
                        </h3>

                        {/* Mobile View – Box UI */}
                        <div
                            className={`lg:hidden ${open === "care" ? "block" : "hidden"}
                bg-white border border-gray-300 rounded-lg p-3`}
                        >
                            <ul className="space-y-2 text-lg text-gray-800">
                                <li onClick={closeMenu} className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100">
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li onClick={closeMenu} className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100">
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                </li>
                                <li onClick={closeMenu} className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100">
                                    <Link to="/Refund-policy">Refund Policy</Link>
                                </li>
                                <li onClick={closeMenu} className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100">
                                    <Link to="/Shipping-policy">Shipping Policy</Link>
                                </li>
                                <li onClick={closeMenu} className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100">
                                    <Link to="/Termsofservice-policy">Terms of Service</Link>
                                </li>
                                <li onClick={closeMenu} className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100">
                                    <Link to="/contact">Contact Information</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Desktop View – Normal List */}
                        <ul className="hidden lg:block space-y-2 text-lg text-gray-700">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/Refund-policy">Refund Policy</Link></li>
                            <li><Link to="/Shipping-policy">Shipping Policy</Link></li>
                            <li><Link to="/Termsofservice-policy">Terms of Service</Link></li>
                            <li><Link to="/contact">Contact Information</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2 lg:mb-4 cursor-pointer lg:cursor-default bg-white lg:bg-transparent p-3 lg:p-0 rounded lg:rounded-none shadow lg:shadow-none flex justify-between items-center">
                            Contact Us
                        </h3>
                        <div className="text-lg space-y-2">
                            <p>📞 +91 84603 61497</p>
                            <p>✉️ nikunjnavadiya7@gmail.com</p>
                            <p>📍 Gujarat, India</p>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-300 mt-10 lg:mt-12 pt-6 text-center md:text-right text-lg pb-5">
                    © {new Date().getFullYear()} Krishnas Jewellers. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
