import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

interface FooterSectionProps {}

const FooterSection: React.FC<FooterSectionProps> = () => {
  return (
    <footer className="bg-[#101010] text-white w-full">
      {/* Top Section */}
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row justify-between lg:items-start  gap-10 p-8 sm:p-12 lg:p-20">
        {/* Left Logo */}
        <div className="flex-shrink-0 flex  justify-start ml-8 gap-4">
          <img
            src="https://www.iitb.ac.in/themes/custom/iitb_bootstrap/logo.png"
            alt="Shivaji Logo"
            className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
          />

          <h1 className=" text-2xl md:text-4xl max-w-[20rem]">Shri Chhatrapati Shivaji College of Pharmacy</h1>
        </div>

        {/* Center Link Groups */}
        <div className=" flex flex-row  flex-wrap items-center  gap-8 md:gap-14 w-full ml-10 md:ml-0 ">
          {/* Campus */}
          <div className="w-auto  ">
            <h3 className="  text-2xl lg:text-4xl  font-medium mb-3">Campus</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Departments</li>
              <li>Laboratories</li>
              <li>Library</li>
            </ul>
          </div>

          {/* Academics */}
          <div className="w-auto  ml-5 md:ml-0">
            <h3 className="text-2xl lg:text-4xl font-medium mb-3">Academics</h3>
            <ul className="space-y-1 text-gray-400">
              <li>B.Pharm</li>
              <li>D.Pharm</li>
              <li>Academic Calendar</li>
            </ul>
          </div>

          {/* Admissions */}
          <div className="w-auto">
            <h3 className="text-2xl lg:text-4xl font-medium mb-3">Admissions</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Apply Now</li>
              <li>Fee Structure</li>
              <li>Scholarships</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="w-auto ">
            <h3 className="text-2xl lg:text-4xl font-medium mb-3">Quick Links</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Contact Us</li>
              <li>Faculty</li>
              <li>Student Portal</li>
            </ul>
          </div>

        
        </div>
      </div>

 {/* Giant SHIVAJI Text with Image */}
<div  

  className="text-[130px] text-gray-300 sm:text-[230px] md:text-[330px] lg:text-[570px] leading-none font-bold text-center  bg-clip-text uppercase select-none"
  style={{
  
    fontFamily: "InstrumentSerif"
  }}
>
  Shivaji
</div>

    </footer>
  );
};

export default FooterSection;
