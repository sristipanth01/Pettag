import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
    rating: 0,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (formData.name.trim() === "") {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    if (formData.email.trim() === "") {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid";
      isValid = false;
    }
    if (formData.rating === 0) {
      tempErrors.rating = "Please select a rating";
      isValid = false;
    }
    if (formData.comments.trim() === "") {
      tempErrors.comments = "Comments are required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Feedback submitted: ", formData);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        comments: "",
        rating: 0,
      });
      setErrors({});
    }
  };

  const handleStarClick = (rating) => {
    setFormData({
      ...formData,
      rating: rating,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-300">
      <div className="w-full sm:w-[400px] bg-slate-800 border border-slate-700 rounded-xl p-6 text-sm mx-auto shadow-2xl">
        <h1 className="text-center text-slate-600 text-xl font-bold mb-4">
          Send Feedback
        </h1>

        {/* Name Input */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full bg-slate-700 text-slate-300 placeholder:text-slate-400 placeholder:opacity-50 border border-slate-600 rounded-lg p-2 mb-3"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        {/* Email Input */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full bg-slate-700 text-slate-300 placeholder:text-slate-400 placeholder:opacity-50 border border-slate-600 rounded-lg p-2 mb-3"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        {/* Comments Input */}
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          placeholder="Your feedback..."
          className="w-full bg-slate-700 text-slate-300 placeholder:text-slate-400 placeholder:opacity-50 border border-slate-600 rounded-lg p-2 mb-3"
        ></textarea>
        {errors.comments && <p className="text-red-500">{errors.comments}</p>}

        {/* Star Rating */}
        <div className="flex mb-4 justify-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={30}
              className={`cursor-pointer ${
                star <= formData.rating ? "text-yellow-400" : "text-slate-600"
              }`}
              onClick={() => handleStarClick(star)}
            />
          ))}
        </div>
        {errors.rating && <p className="text-red-500">{errors.rating}</p>}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white p-2 rounded-lg"
        >
          Submit Feedback
        </button>

        {submitted && (
          <p className="text-green-500 mt-4">
            Feedback submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
}

export default FeedbackPage;
