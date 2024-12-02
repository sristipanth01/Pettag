import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import blogImage1 from "../images/blog1.jpg";
import blogImage2 from "../images/blog2.jpg";
import blogImage3 from "../images/blog3.jpg";
import blogImage4 from "../images/blog4.png";

const BlogPage = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "What is Pet Parichaye?",
      description: `
      Pet Parichaye is a revolutionary digital identification system designed to safeguard pets and provide peace of mind for pet owners. At its core, it leverages QR code technology to create a digital dog tag that contains crucial information about the pet.

      With just a quick scan, anyone can access the pet's identity card, which includes details such as:
      `,
      listItems: [
        "Pet's Name & Breed",
        "Owner’s Contact Information",
        "Medical History",
        "Vaccination Records",
        "Special Needs",
      ],
      conclusion: `
      This innovative solution ensures that in emergencies—such as when a pet is lost or requires urgent medical attention—vital information is readily accessible. The aim is to make pet identification more reliable, easy, and secure in an ever-connected world.
    `,
      image: blogImage3,
    },
    {
      id: 2,
      title: "A Digital Identification System for Pets",
      description: `
  As pet parents, ensuring the safety and well-being of our furry companions is our top priority. But traditional pet tags often lack sufficient information and can easily get lost. Pet Parichaye’s digital ID system steps in to solve this challenge by offering a seamless and modern solution.

  Imagine a world where:
  `,
      listItems: [
        "Lost pets are returned faster because rescuers can scan a QR code to immediately notify owners.",
        "Veterinarians can instantly access a pet's medical history, streamlining treatments in emergencies.",
        "Pet shelters and communities can collaborate better to ensure every stray or rescued pet finds its way back home.",
      ],
      conclusion: `
  Pet Parichaye bridges this gap by combining smart technology with compassion for our beloved companions, making it an essential tool for responsible pet ownership.
`,

      image: blogImage1,
    },
    {
      id: 3,
      title: "A Step Towards a Safer Future for Pets",
      description: `
  As technology transforms every aspect of our lives, it's time to use it to create a safer future for pets. Digital identification isn’t just about convenience; it’s about saving lives. 

  Pet Parichaye envisions a world where every pet has a unique digital identity that:
  `,
      listItems: [
        "Connects them to the pet-loving community.",
        "Protects them during unforeseen situations, such as getting lost or natural disasters.",
        "Facilitates smoother adoption and fosters transparency in animal welfare.",
      ],
      conclusion: `
  By adopting this system, pet owners, shelters, and even local authorities can create a unified network that ensures no pet is ever left behind.
`,
      image: blogImage2,
    },
    {
      id: 4,
      title: "Why Every Pet Deserves a Digital Identity?",
      description: `
  In the digital age, why should humans alone enjoy the benefits of technology? Our pets deserve the same care and consideration. A digital identity for pets is not just a luxury—it’s a necessity.

  Pet Parichaye offers:
  `,
      listItems: [
        "Enhanced Safety: A digital ID allows anyone who finds a lost pet to instantly access their owner's contact details.",
        "Quick Medical Attention: Vets can retrieve critical medical information, such as allergies or past surgeries, to offer prompt care.",
        "Easy Updates: Unlike traditional tags, digital IDs can be updated with new addresses or phone numbers without needing replacements.",
      ],
      conclusion: `
  Pet Parichaye ensures that your pet’s identity is secure, accessible, and up-to-date at all times. Every pet deserves the protection and care that a digital ID can provide, just like every human deserves to be loved and cared for.
`,

      image: blogImage4,
    },
  ];

  const truncateText = (text, maxLength) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  const handleReadMore = (post) => {
    navigate(`/blog/${post.id}`, { state: { post } });
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 max-w-screen-lg">
        <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-lg overflow-hidden"
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.id} className="relative group">
              <div
                className="flex flex-col items-center bg-gray-900 p-4 rounded-lg shadow-lg h-[450px] justify-between transform transition-transform duration-500 group-hover:scale-105 group-hover:group-hover:translate-y-[-30px] group-hover:z-10 group-hover:opacity-100 group-hover:shadow-2xl"
                style={{ opacity: 0.9 }}
              >
                <div className="absolute inset-0 rounded-lg bg-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-lg w-full h-48 object-cover group-hover:brightness-110 group-hover:contrast-125 transition-all duration-500"
                />

                <div className="text-center px-4 flex flex-col h-full justify-between relative z-10">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="mb-4 text-sm h-20 overflow-hidden">
                    {truncateText(post.description, 100)}
                  </p>
                  <button
                    onClick={() => handleReadMore(post)}
                    className="bg-green-500 text-white px-4 py-2 rounded-xl transform transition-transform duration-300 hover:bg-green-600 hover:scale-110 hover:shadow-lg hover:text-black"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogPage;
