import React from "react";
import dogImage from "../images/img4.png";

const Dashboard = () => {
  return (
    <div className="about-page max-w-6xl mx-auto p-4">
      <h1 className="text-6xl font-bold mb-4">Pet Parichaye</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="p-14 font-medium">
            "Pet Parichaye" is an innovative platform for pet owners seeking
            complete details pertaining to their pets. We make use of QR tags to
            make it easier to handle and explore essential information on your
            pets such as anything that might identify them by their name,
            parents, vaccination schedule, or overall health condition.
          </p>

          <button class="  relative flex justify-center items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group">
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Get Started
            </span>
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src={dogImage}
            alt="About Pet Parichaye"
            className="w-80 h-auto transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-1 animate-fadeIn"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
