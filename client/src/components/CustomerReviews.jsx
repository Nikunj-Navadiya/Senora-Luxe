import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const reviews = [
  {
    name: "Riya Rawat",
    date: "October 1, 2024 10:52 AM",
    rating: 5,
    review:
      "Lahenga is same as the pic.... Gorgeous 😍 Go for it 💙💜",
    initial: "R",
    bgColor: "bg-orange-500",
  },
  {
    name: "Kavita Singh",
    date: "July 15, 2025 10:52 PM",
    rating: 4.5,
    review:
      "Satisfied with their service always.I have been purchasing from them for 1 year.. trust worthy",
    initial: "K",
    bgColor: "bg-blue-400",
  },
  {
    name: "Uma Devi",
    date: "September 15, 2025 03:52 PM",
    rating: 5,
    review:
      "Super products.. Material quality good.. Thank you Senora-Luxe.",
    initial: "U",
    bgColor: "bg-pink-500",
  },
];

const renderStars = (rating) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} />);
    } else if (i - rating < 1) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }

  return stars;
};

const CustomerReviews = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-12 bg-gradient-to-b from-[#fffaf2] to-[#f3e4c8]">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#b9935a] to-[#e6c77c] bg-clip-text text-center text-transparent tracking-wide">
        What Our Customers Say
      </h1>

      <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 flex items-center justify-center text-white font-bold text-lg rounded-full ${item.bgColor}`}
              >
                {item.initial}
              </div>

              <div>
                <h2 className="font-semibold text-lg text-gray-800">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mt-3 text-orange-500 text-lg">
              {renderStars(item.rating)}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 mt-3 text-[15px] leading-relaxed">
              {item.review}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
