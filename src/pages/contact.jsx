import React, { useState } from "react";
import dog from "../images/img2.jpg";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";
import { MdSubject } from "react-icons/md";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState("");

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
    if (formData.subject.trim() === "") {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }
    if (formData.message.trim() === "") {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocusedField("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data submitted: ", formData);
      alert("Thank you for contacting us! We will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
      setFocusedField("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex gap-8 mb-8">
        <div className="flex-1">
          <h2 className="mb-2 text-3xl font-bold animate-fadeInUp">
            Contact Us
          </h2>
          <div className="rounded-[15px] p-7 m-0.5">
            <img
              src={dog}
              alt="Pet"
              className="rounded-lg transform transition duration-500 hover:scale-105 hover:rotate-2 animate-fadeIn"
            />
          </div>
          <p>
            At Pet Parichaye, we are dedicated to offering you the best care and
            information about your pets. Whether you have questions, need
            support, or want to learn more, we are here to help.
          </p>
        </div>

        {/* Form Container */}
        <div className="flex-1">
          <h1 className="font-semibold text-2xl m-3 animate-fadeInUp">
            General Enquiry
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name Field */}
              <div className="relative">
                <input
                  className="p-2 mt-3 text-base border border-gray-300 rounded-lg w-full transition-transform duration-300 focus:scale-105 focus:border-black focus:ring-2 focus:ring-black focus:outline-none peer"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
                  onBlur={() => handleBlur("name")}
                  placeholder=" "
                  required
                />
                <label
                  className={`p-2 absolute left-1 text-md top-1 text-gray-500 transition-all duration-200 transform origin-left pointer-events-none ${
                    focusedField === "name" || formData.name
                      ? "-translate-y-6 scale-90"
                      : ""
                  }`}
                  htmlFor="name"
                >
                  Name:
                </label>
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.name}
                  </span>
                )}
                <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm" />
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  className="p-2 mt-3 text-base border border-gray-300 rounded-lg w-full transition-transform duration-300 focus:scale-105 focus:border-black focus:ring-2 focus:ring-black focus:outline-none peer"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={() => handleBlur("email")}
                  placeholder=" "
                  required
                />
                <label
                  className={`p-2 absolute left-1 top-1 text-gray-500 text-md transition-all duration-200 transform origin-left pointer-events-none ${
                    focusedField === "email" || formData.email
                      ? "-translate-y-6 scale-90"
                      : ""
                  }`}
                  htmlFor="email"
                >
                  Email:
                </label>
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </span>
                )}
                <FaEnvelope className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm" />
              </div>

              {/* Subject Field */}
              <div className="relative">
                <input
                  className="p-2 mt-3 mb-2 text-base border border-gray-300 rounded-lg w-full transition-transform duration-300 focus:scale-105 focus:border-black focus:ring-2 focus:ring-black focus:outline-none peer"
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus("subject")}
                  onBlur={() => handleBlur("subject")}
                  placeholder=" "
                  required
                />
                <label
                  className={`p-2 absolute left-1 top-1 text-gray-500 text-md transition-all duration-200 transform origin-left pointer-events-none ${
                    focusedField === "subject" || formData.subject
                      ? "-translate-y-6 scale-90"
                      : ""
                  }`}
                  htmlFor="subject"
                >
                  Subject:
                </label>
                {errors.subject && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.subject}
                  </span>
                )}
                <MdSubject className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm" />
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  className="mt-2 p-2 text-base border border-gray-300 rounded-lg w-full resize-y h-16 transition-transform duration-300 focus:scale-105 focus:border-black focus:ring-2 focus:ring-black focus:outline-none peer"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={() => handleBlur("message")}
                  placeholder=" "
                  required
                ></textarea>
                <label
                  className={`p-4 absolute left-1 -top-2 text-gray-500 text-md transition-all duration-200 transform origin-left pointer-events-none ${
                    focusedField === "message" || formData.message
                      ? "-translate-y-6 scale-90"
                      : ""
                  }`}
                  htmlFor="message"
                >
                  Message:
                </label>
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.message}
                  </span>
                )}
                <FaComment className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm" />
              </div>

              <button className="h-12 mt-5 bg-white cursor-pointer rounded-3xl border-2 border-[#81aae4] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#81aae4] transition duration-300 ease-in-out">
                <span className="font-medium text-[#333] group-hover:text-white">
                  Send message
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex gap-8 mt-8 p-5">
        {/* Left section for contact details */}
        <div className="w-1/2 text-left mt-6">
          <h3 className="mb-2 font-bold text-2xl animate-fadeInUp">
            Our Address
          </h3>
          <p className="my-1">Pet Parichaye</p>
          <p className="my-1">Kathmandu, Nepal</p>

          <h3 className="mb-2 font-bold text-2xl animate-fadeInUp">Email Us</h3>
          <p className="my-1">
            For inquiries:{" "}
            <a
              className="text-blue-500 no-underline hover:underline"
              href="mailto:info@petparichaye.com"
            >
              info@petparichaye.com
            </a>
          </p>
          <p className="my-1">
            Support:{" "}
            <a
              className="text-blue-500 no-underline hover:underline"
              href="mailto:support@petparichaye.com"
            >
              support@petparichaye.com
            </a>
          </p>

          <h3 className="mb-2 font-bold text-2xl animate-fadeInUp">Phone</h3>
          <p className="my-1">+977-9867423768</p>
        </div>

        {/* Right section for map */}
        <div className="w-1/2 mt-6">
          <h3 className="mb-2 font-bold text-2xl animate-fadeInUp">
            Our Location
          </h3>
          <div className="w-full h-64 rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4074644550346!2d85.31879157533027!3d27.707927376053393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199b93742bb7%3A0x3dfc9f0e99292fd3!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1611764388838!5m2!1sen!2snp"
              allowFullScreen=""
              loading="lazy"
              title="Pet Parichaye Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
