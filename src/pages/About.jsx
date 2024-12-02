import React from "react";
import { Link } from "react-router-dom";
import dogImage from "../images/img.png";
import dogImage0 from "../images/img_vet.jpg";
import dogImage1 from "../images/img1.jpg";
import dogImage2 from "../images/img6.jpg";
import dogImage3 from "../images/dog.jpeg";
// import teamMember1 from "../images/team1.jpg";
// import teamMember2 from "../images/team2.jpg";
// import teamMember3 from "../images/team3.jpg";

const About = () => {
  return (
    <div className="about-page max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Pet Parichaye</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="p-10">
            "Pet Parichaye" is an innovative platform for pet owners seeking
            complete details pertaining to their pets. We make use of QR tags to
            make it easier to handle and explore essential information on your
            pets such as anything that might identify them by their name,
            parents, vaccination schedule, or overall health condition.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={dogImage}
            alt="About Pet Parichaye"
            className="w-72 h-350px object-cover"
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img
            src={dogImage0}
            alt="About Pet Parichaye"
            className="w-72 h-330px object-cover"
          />
        </div>

        <div className="flex justify-center mt-4">
          <p className="p-10">
            Our mission is to improve pet care by embracing technology that
            assures that all information concerning a pet be made available to
            the owner, caregivers, and veterinarians. With "Pet Parichaye", you
            are assured that your pet's vital health information is just a scan
            away.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4 mt-6">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ul className="p-10">
            <li>
              <strong>QR Tag Integration:</strong> Each pet gets a unique QR tag
              that provides instant access to its profile, including its name,
              parents, and other details.
            </li>
            <li>
              <strong>Vaccination Schedule Management:</strong> Keep track of
              upcoming vaccinations and maintain a history of past vaccinations
              to ensure your pet stays healthy.
            </li>
            <li>
              <strong>Health Condition Monitoring:</strong> Record and update
              your pet's health status, allowing for quick access during vet
              visits or emergencies.
            </li>
            <li>
              <strong>Parent Information:</strong> Easily access and document
              the lineage of your pet for better breeding and genetic
              management.
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
          <img
            src={dogImage1}
            alt="About Pet Parichaye"
            className="w-72 h-250 object-cover rounded-2xl "
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4">How It Works?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img
            src={dogImage2}
            alt="About Pet Parichaye"
            className="mb-4 w-72 h-300px object-cover rounded-[60px]"
          />
        </div>

        <div className="flex justify-center">
          <p className="p-10">
            Once you register your pet on our platform, you will receive a QR
            tag that can be attached to your pet's collar. Simply scan the QR
            tag using a smartphone to access a detailed profile of your pet.
            This profile is updated regularly with information such as
            vaccination records, health check-ups, and other important details.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-8 flex justify-center">
        Our Team Members
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center">
          <Link to="/profile/zenesh">
            <img
              src={dogImage3}
              alt="Team Member 1"
              className="w-48 h-48 object-cover rounded-full shadow-lg"
            />
          </Link>
          <h3 className="text-xl font-bold mt-4">Zenesh Shrestha</h3>
          <p className="text-center text-gray-600">Backend Developer</p>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col items-center">
          <Link to="/profile/shristi">
            <img
              src={dogImage3}
              alt="Team Member 2"
              className="w-48 h-48 object-cover rounded-full shadow-lg"
            />
          </Link>

          <h3 className="text-xl font-bold mt-4">Shristi Pantha</h3>
          <p className="text-center text-gray-600">Frontend Developer</p>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col items-center">
          <Link to="/profile/bikalpa">
            <img
              src={dogImage3}
              alt="Team Member 3"
              className="w-48 h-48 object-cover rounded-full shadow-lg"
            />
          </Link>
          <h3 className="text-xl font-bold mt-4">Bikalpa Shrestha</h3>
          <p className="text-center text-gray-600">Frontend Developer</p>
        </div>
      </div>
    </div>
  );
};

export default About;
