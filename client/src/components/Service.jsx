import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { motion } from "framer-motion";

const Service = () => {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-20 bg-[#e6e6e6]">

            <motion.div
                className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 items-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >

                <motion.div
                    variants={cardVariants}
                    whileHover={{ scale: 1.05 }}
                    className='flex flex-col items-center text-center h-45 border bg-[#ffffff] border-gray-200 shadow-lg rounded p-5'
                >
                    <MdOutlineLocalShipping className="text-4xl text-[#b9935a] mb-2" />
                    <p className='text-md text-gray-900 font-extrabold mb-2'>Free Shipping</p>
                    <span className='text-sm text-gray-600'>
                        No Delivery Fees Applied, Every Order Ships Free Within
                    </span>
                </motion.div>

                <motion.div
                    variants={cardVariants}
                    whileHover={{ scale: 1.05 }}
                    className='flex flex-col items-center text-center h-45 border bg-[#ffffff] border-gray-200 shadow-lg rounded p-5'
                >
                    <FaHandHoldingHeart className="text-4xl text-[#b9935a] mb-2" />
                    <p className='text-md text-gray-900 font-extrabold mb-2'>24 X 7 Support</p>
                    <span className='text-sm text-gray-600'>
                        Contact us 24 Hours a Day, 7 Days a Week
                    </span>
                </motion.div>

                <motion.div
                    variants={cardVariants}
                    whileHover={{ scale: 1.05 }}
                    className='flex flex-col items-center text-center h-45 border bg-[#ffffff] border-gray-200 shadow-lg rounded p-5'
                >
                    <GiReturnArrow className="text-4xl text-[#b9935a] mb-2" />
                    <p className='text-md text-gray-900 font-extrabold mb-2'>7 Days Return</p>
                    <span className='text-sm text-gray-600'>
                        Simply Return it Within 7 Days for an Exchange
                    </span>
                </motion.div>

                <motion.div
                    variants={cardVariants}
                    whileHover={{ scale: 1.05 }}
                    className='flex flex-col items-center text-center h-45 border bg-[#ffffff] border-gray-200 shadow-lg rounded p-5'
                >
                    <MdOutlinePayment className="text-4xl text-[#b9935a] mb-2" />
                    <p className='text-md text-gray-900 font-extrabold mb-2'>Payment Secure</p>
                    <span className='text-sm text-gray-600'>
                        Secure Payments with 100% Protection
                    </span>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default Service;