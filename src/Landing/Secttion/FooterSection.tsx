import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

interface FooterSectionProps {}

const FooterSection: React.FC<FooterSectionProps> = () => {
  return (
    <footer className="bg-[#101010] text-white w-full">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 p-8 sm:p-12 lg:p-20">
        {/* Left Logo */}
        <div className="flex-shrink-0 flex justify-center lg:justify-start">
          <img
            src="https://www.mahafencing.in/images/big_logo.png?v=1748147038"
            alt="Shivaji Logo"
            className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
          />
        </div>

        {/* Center Link Groups */}
        <div className="flex flex-wrap justify-between flex-1 gap-8 sm:gap-10 w-full">
          {/* Campus */}
          <div className="w-1/2 sm:w-1/3 md:w-1/5">
            <h3 className="text-lg font-semibold mb-3">Campus</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Departments</li>
              <li>Laboratories</li>
              <li>Library</li>
            </ul>
          </div>

          {/* Academics */}
          <div className="w-1/2 sm:w-1/3 md:w-1/5">
            <h3 className="text-lg font-semibold mb-3">Academics</h3>
            <ul className="space-y-1 text-gray-400">
              <li>B.Pharm</li>
              <li>D.Pharm</li>
              <li>Academic Calendar</li>
            </ul>
          </div>

          {/* Admissions */}
          <div className="w-1/2 sm:w-1/3 md:w-1/5">
            <h3 className="text-lg font-semibold mb-3">Admissions</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Apply Now</li>
              <li>Fee Structure</li>
              <li>Scholarships</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="w-1/2 sm:w-1/3 md:w-1/5">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Contact Us</li>
              <li>Faculty</li>
              <li>Student Portal</li>
            </ul>
          </div>

          {/* Social */}
          <div className="w-1/2 sm:w-1/3 md:w-1/5 flex flex-col items-start sm:items-end justify-center gap-2 text-gray-400">
            <h3 className="text-lg font-semibold mb-2">Social</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Giant SHIVAJI Text */}
      <div className="text-[120px] sm:text-[200px] md:text-[300px] lg:text-[420px] leading-none font-bold text-center bg-gradient-to-b from-white to-[#101010] text-transparent bg-clip-text uppercase select-none">
        Shivaji
      </div>
    </footer>
  );
};

export default FooterSection;
