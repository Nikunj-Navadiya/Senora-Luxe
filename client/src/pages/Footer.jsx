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
        <footer className="bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.footer})` }}>
            <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pt-10 lg:pt-14 bg-white/70">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-10">

                    {/* Logo */}
                    <div>
                        <Link to="/">
                            <img src={assets.logo1} alt="Krishnas Jewellers" className="w-40 mb-4" />
                        </Link>
                        <p className="text-lg leading-6">
                            Premium fabric platform offering stylish, high-quality textiles online effortlessly.
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
                            My Account
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
                                    Register
                                </li>
                                <li onClick={closeMenu} className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Login
                                </li>
                                <li onClick={closeMenu} className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    View Order
                                </li>
                                <li onClick={closeMenu} className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Track Your Shipment
                                </li>
                            </ul>
                        </div>

                        {/* Desktop View – Simple List */}
                        <ul className="hidden lg:block space-y-2 text-lg text-gray-900">
                            
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/'>View Order</Link></li>
                            <li><Link to='/'>Track Your Shipment</Link></li>
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
                        <ul className="hidden lg:block space-y-2 text-lg text-gray-900">
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
                            <p>📞 +91 84696 70927</p>
                            <p>✉️ support@senoraluxe.com</p>
                            <p>📍 140-143, Raghuvir Shoppers, Near Lajamani Chowk, Mota Varchha, Surat, Gujarat, India</p>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-300 mt-10 lg:mt-12 pt-6 text-center md:text-right text-lg pb-5">
                    © {new Date().getFullYear()} Senora Luxe. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
