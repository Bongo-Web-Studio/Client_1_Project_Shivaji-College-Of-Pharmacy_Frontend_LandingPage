import React from "react";
import AboutUsCardComponent from "../Components/AboutUsCardComponent";

interface AboutUsSectionProps {}

const AboutUsSection: React.FC<AboutUsSectionProps> = () => {
  return (
    <section className="bg-white p-6 sm:p-8 md:p-12 lg:p-16">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row w-full justify-center items-start lg:items-center gap-8">
        {/* Left Side: Established */}
        <div className="lg:w-2/5 w-full text-center lg:text-left text-2xl sm:text-3xl md:text-4xl">
          <span className="text-4xl sm:text-5xl md:text-6xl font-bold">E</span>
          stablished <span className="text-gray-500 text-lg sm:text-xl md:text-2xl">in 2023</span>
        </div>

        {/* Right Side: About Us Text */}
        <div className="lg:w-3/5 w-full text-left">
          <h2 className="italic text-gray-600 text-lg sm:text-xl md:text-2xl">About us</h2>
          <p className="mt-5 text-base sm:text-lg md:text-xl leading-relaxed">
            <span className="font-semibold text-lg sm:text-xl md:text-2xl">
              <span className="text-3xl sm:text-4xl md:text-5xl uppercase">S</span>
              hri Chhatrapati Shivaji College of Pharmacy is approved by the Pharmacy Council of India (PCI), New Delhi, and recognized by the Directorate of Technical Education (DTE), Government of Maharashtra. It is affiliated with Dr. Babasaheb Ambedkar Technological University (B.Pharm) and MSBTE (D.Pharm), Mumbai.
            </span>
            <span className="block mt-4 text-gray-500 text-base sm:text-lg md:text-xl">
              The college offers D.Pharm and B.Pharm programs, each with an intake of 60 students. Committed to excellence in pharmaceutical education and research, the college fosters student growth through dedicated faculty and a competitive learning environment.
            </span>
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center items-center mt-16 sm:mt-24 md:mt-32">
        <AboutUsCardComponent />
      </div>
    </section>
  );
};

export default AboutUsSection;
