import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DetailedBlog = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { post } = state || {};

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Post not found</h1>
          <button
            onClick={() => navigate("/blog")}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center max-w-screen-lg">
        {/* Left Content */}
        <div className="w-full md:w-1/2 pr-4">
          <p className="text-pink-500 font-semibold uppercase tracking-widest mb-2">
            Crafting • {new Date().toDateString()}
          </p>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-700 text-lg leading-7 mb-4">
            {post.description}
          </p>
          <ul className="list-disc list-inside my-4">
            {post.listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{post.conclusion}</p>
          <button
            onClick={() => navigate(-1)}
            className="text-pink-500 hover:text-pink-600 text-lg font-semibold flex items-center"
          >
            <span className="mr-2">← Back to Blog</span>
          </button>
        </div>
        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <img
            src={post.image}
            alt={post.title}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailedBlog;
