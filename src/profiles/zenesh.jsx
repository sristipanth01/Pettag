import React from "react";
import shriImage from "../images/img1.jpg"; // Adjust path as necessary

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-80 h-[28rem] bg-white shadow-md rounded-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
        {/* Larger Circular Profile Image */}
        <div className="flex justify-center -mt-12">
          <img
            src={shriImage}
            alt="Bikalpa's Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* Profile Content */}
        <div className="mt-4 p-5 text-center">
          <h3 className="text-lg font-bold">Zenesh Shrestha</h3>
          <p className="text-lg font-semibold text-gray-600">
            Backend Developer
          </p>
          <div className="mt-4">
            <p className="text-sm text-gray-700">
              Zenesh is a backend developer focused on creating scalable and
              efficient web applications. With expertise in various programming
              languages, he excels in API integration and data management,
              ensuring smooth and secure system operations. His commitment to
              quality solutions enhances the user experience across our
              platforms.
            </p>
          </div>
        </div>

        {/* View Profile Button with Hover Effect */}
        <div className="absolute bottom-5 w-full flex justify-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full transition duration-300 transform hover:bg-blue-600 hover:scale-110">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
