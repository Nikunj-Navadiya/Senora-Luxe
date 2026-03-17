import React from "react";

const Refundpolicy = () => {
    return (
        <div className="sm:px-[5vw] md:px-[7vw] lg:px-[9vw] px-4 py-10 bg-[#dbdedf]">
            <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl  2xl:text-5xl font-bold drop-shadow-lg leading-tight mb-3 text-[#0f484e] text-center">Shipping, Return & Refund Policy</h1>
            </div>

            <div className="pb-4">
                <p className="text-lg text-gray-800">At Senora Luxe, customer satisfaction is our priority. Please read our Shipping, Cancellation, Return & Refund Policy carefully before placing an order.</p>
            </div>

            <div className="pb-4">
                <h2 className="text-xl xl:text-2xl font-bold text-[#0f484e] ">Return & Replacement Policy</h2>
                <p className="list-disc list-inside text-lg text-gray-800">We accept returns or replacements only under the following conditions:</p>
                <ul className="list-disc list-inside text-lg text-gray-800">Accepted Reasons for Return/Replacement
                    <li>Product received in damaged or defective condition</li>
                    <li>Incorrect product delivered</li>
                    <li>Missing parts or items from your order</li>
                </ul>

                <ul className="list-disc list-inside text-lg text-gray-800">
                    Non-Acceptable Reasons for Return/Replacement
                    <li>Product has been worn, washed, altered, or used</li>
                    <li>Partial return of items purchased as a full product</li>
                    <li>Items not returned in original condition with tags and packaging intact</li>
                    <li>Products purchased as part of a combo/set cannot be returned individually</li>
                    <li>Return requests based on personal preference or dislike</li>
                    <li>Damage caused due to customer mishandling</li>
                </ul>

                <p className="list-disc list-inside text-lg text-gray-800">Note: Replacement is subject to product availability on our website.</p>
            </div>


            <div className="pb-4">
                <h2 className="text-xl xl:text-2xl font-bold text-[#0f484e] ">Refund Policy</h2>
                <ul className="list-disc list-inside text-lg text-gray-800"><span   >Quality Check</span>
                    <li>All products undergo strict quality inspection before dispatch. Returns will not be accepted for damages caused due to improper handling after delivery.</li>
                </ul> 

                <ul className="list-disc list-inside text-lg text-gray-800">Return Process
                    <li>Initiate a return request through our website or by contacting customer support.</li>
                    <li>After approval, return the product to our warehouse address provided by our support team.</li>
                </ul>

                <ul className="list-disc list-inside text-lg text-gray-800">Refund Method
                    <li>Once the returned item is received and passes inspection, the refund will be processed.</li>
                    <li>Refunds will be credited to the original payment method.</li>
                </ul>

                <ul className="list-disc list-inside text-lg text-gray-800">For COD Orders
                    <li>•	Our customer support team will provide a refund form to collect your bank details.</li>
                    <li>•	Refunds for COD orders will be processed via NEFT bank transfer.</li>
                </ul>

                <ul className="list-disc list-inside text-lg text-gray-800">Refund Processing Time
                    <li>Refunds are typically processed within 10–12 working days after successful inspection.</li>
                </ul>

                <ul className="list-disc list-inside text-lg text-gray-800">Return Shipping Charges
                    <li>If pickup service is unavailable in your area, you must ship the product back to our warehouse.</li>
                    <li>Courier charges may be deducted from the refund amount in such cases.</li>
                </ul>
                
            </div>


        </div>
    )
}

export default Refundpolicy;