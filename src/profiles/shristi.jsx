import React from "react";
import shriImage from "../images/img1.jpg";

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-80 h-[28rem] bg-white shadow-md rounded-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
        <div className="flex justify-center -mt-12">
          <img
            src={shriImage}
            alt="Shristi's Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* Profile Content */}
        <div className="mt-2 p-5 text-center">
          <h3 className="text-lg font-bold">Shristi Pantha</h3>
          <p className="text-lg font-semibold text-gray-600">
            Frontend Developer
          </p>
          <div className="mt-2">
            <p className="text-sm text-gray-700">
              Shristi is a skilled frontend developer specializing in React and
              Tailwind CSS. She creates dynamic, responsive user interfaces
              paying much attention to performance and consistency of design.
              With a strong background in component-based architecture and
              utility-first CSS, she constructs elegant and efficient web
              applications that ultimately contribute to improving user
              experience.
            </p>
          </div>
        </div>

        {/* Button with margin above */}
        <div className="absolute bottom-5 w-full flex justify-center mt-5">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full transition duration-300 transform hover:bg-blue-600 hover:scale-110">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
