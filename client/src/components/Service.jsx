import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";

const Service = () => {
    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-20 bg-[#e6e6e6]">

            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  gap-4 items-center">

                <div className='flex flex-col items-center text-center h-45 border bg-[#ffffff] border-gray-200 shadow-lg rounded p-5'>
                    <MdOutlineLocalShipping className="text-4xl text-[#b9935a] mb-2" />
                    <p className='text-md text-gray-900 font-extrabold mb-2'>Free Shipping</p>
                    <span className='text-sm text-gray-600'>No Delivery Fees Applied, Every Order Ships Free Within </span>
                </div>

                <div className='flex flex-col items-center text-center h-45 border bg-[#ffffff] border-gray-200 shadow-lg rounded p-5'>
                    <FaHandHoldingHeart className="text-4xl text-[#b9935a] mb-2" />
                    <p className='text-md text-gray-900 font-extrabold mb-2'>24 X 7 Support</p>
                    <span className='text-sm text-gray-600'>Contact us 24 Hours a Day, 7 Days a Week</span>
                </div>

                <div className='flex flex-col items-center text-center h-45 border bg-[#ffffff] border-gray-200 shadow-lg rounded p-5'>
                    <GiReturnArrow className="text-4xl text-[#b9935a] mb-2" />
                    <p className='text-md text-gray-900 font-extrabold mb-2'>7 Days Return</p>
                    <span className='text-sm text-gray-600'>Simply Return it Within 7 Days for an Exchange</span>
                </div>

                <div className='flex flex-col items-center text-center h-45 border bg-[#ffffff] border-gray-200 shadow-lg rounded p-5'>
                    <MdOutlinePayment className="text-4xl text-[#b9935a] mb-2" />
                    <p className='text-md text-gray-900 font-extrabold mb-2'>Payment Secure</p>
                    <span className='text-sm text-gray-600'>Contact us 24 Hours a Day, 7 Days a Week</span>
                </div>

            </div>
        </div>
    );

};

export default Service;