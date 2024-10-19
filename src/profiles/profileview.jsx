import React from "react";
import { FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ProfileView({ userEmail }) {
  return (
    <div className="fixed right-0 top-0 w-64 h-screen bg-white shadow-lg p-6">
      <div className="flex flex-col items-center mb-6">
        <FaUserCircle className="text-6xl text-gray-500 mb-2" />
        <h2 className="text-lg font-bold">Profile</h2>
        <p className="text-sm text-gray-600">{userEmail}</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
          <FaUserCircle className="text-lg" />
          <span>Profile Status</span>
        </div>

        <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
          <MdEmail className="text-lg" />
          <span>Email Settings</span>
        </div>

        <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
          <FaCog className="text-lg" />
          <span>Account Settings</span>
        </div>

        <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
          <FaSignOutAlt className="text-lg text-red-500" />
          <span className="text-red-500">Sign Out</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
