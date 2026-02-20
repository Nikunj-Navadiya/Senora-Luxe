import React, { useState } from "react";
import assets from "../assets/assets";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_URL}/api/contact`, formData);
      alert("Message sent successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-5 xl:py-8 2xl:py-10 bg-gray-50">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8">

        {/* Stay Connected Section */}
        <div className="w-full lg:w-1/2 border border-gray-100 bg-white shadow-xl rounded-xl p-5 lg:h-[485px] 2xl:h-[520px]">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl  2xl:text-5xl font-bold drop-shadow-lg leading-tight mb-10 text-[#0f484e] ">
              Stay Connected
            </h2>

            <div className="grid gap-10 sm:grid-cols-2 text-center">

              <div >
                <img src={assets.contact1} alt="Contact 1" className="w-10 mx-auto mb-2" />
                <p className="text-[20px] text-gray-950 font-semibold">Phone Number</p>
                <a href="https://wa.me/918469670927"><p className="text-gray-800 text-[18px]">+91 84696 70927</p></a>
              </div>

              <div >
                <img src={assets.contact2} alt="Contact 1" className="w-10 mx-auto mb-2" />
                <p className="text-[20px] text-gray-950 font-semibold">Email</p>
                <a href="mailto:support@senoraluxe.com"><p className="text-gray-800 text-[18px]">support@senoraluxe.com</p></a>
              </div>

              <div >
                <img src={assets.contact3} alt="Contact 1" className="w-10 mx-auto mb-2" />
                <p className="text-[20px] text-gray-950 font-semibold">Location</p>
                <p className="text-gray-800 text-[18px]">140-143, Raghuvir Shoppers, Near Lajamani Chowk, Mota Varchha, Surat, Gujarat, India</p>
              </div>

              <div >
                <img src={assets.contact4} alt="Contact 1" className="w-10 mx-auto mb-2" />
                <p className="text-[20px] text-gray-950 font-semibold">Working Hours</p>
                <p className="text-gray-800 text-[18px]">Monday To Saturday <br /> 09:00 AM To 06:00 PM</p>
              </div>

            </div>

          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 border border-gray-100 bg-white shadow-xl rounded-xl p-5 lg:h-[485px] 2xl:h-[520px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl  2xl:text-5xl font-bold drop-shadow-lg leading-tight mb-3 text-[#0f484e] ">
            Contact Us
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>

            {/* Name */}
            <div>
              <label className="block text-lg font-medium text-gray-800 mb-1">
                Full Name
              </label>
              <input
                name="name"
                value={formData.name} onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row w-full sm:gap-10 md:gap-0 lg:gap-10">

              {/* Phone */}
              <div className="w-full mb-5 sm:mb-0 md:mb-5 lg:mb-0">
                <label className="block text-lg font-medium text-gray-800 mb-1">
                  Phone Number
                </label>

                <PhoneInput
                  country={"in"}                 // default India
                  enableSearch={true}            // dropdown search
                  value={formData.phone}
                  onChange={(value) =>
                    setFormData({ ...formData, phone: `+${value}` })
                  }
                  placeholder="Enter phone number"
                  containerClass="w-full"
                  inputClass="!w-full !h-[42px] !pl-14 !border !rounded-md focus:!ring-2 focus:!ring-black"
                  buttonClass="!border !rounded-l-md"
                />
              </div>


              {/* Email */}
              <div className="w-full">
                <label className="block text-lg font-medium text-gray-800 mb-1">
                  Email
                </label>
                <input
                  name="email"
                  value={formData.email} onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>

            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-medium text-gray-800 mb-1">
                Message
              </label>
              <textarea
                rows="3"
                name="message"
                value={formData.message} onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full text-xl bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition cursor-pointer"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>

<div className="w-full max-w-6xl mx-auto my-10">
  <div className="rounded-xl overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.6435150108355!2d72.88497287380423!3d21.24166038043496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0410717e69%3A0x1bbb06f8e47306bd!2sRaghuvir%20Shoppers%20SR%20enterprises!5e1!3m2!1sen!2sin!4v1771567905589!5m2!1sen!2sin"
      className="w-full h-[450px]"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

      
    </div>
  );
};

export default Contact;
