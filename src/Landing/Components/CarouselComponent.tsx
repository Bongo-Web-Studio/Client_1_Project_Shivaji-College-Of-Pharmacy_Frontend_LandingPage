import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const homePageSlider: string[] = [
  "/imagefrom coolage parma.svg",
  "https://www.shivajipharma.com/assets/img/banner/s-2.jpg",
  "https://www.shivajipharma.com/assets/img/banner/s-4.jpg",
  "https://www.shivajipharma.com/assets/img/banner/s-3.webp",
  "https://www.shivajipharma.com/assets/img/banner/s-1.jpg",
];

const slideText: string[] = [
  "Admissions Open 2025 – Join Shri Chhatrapati Shivaji College of Pharmacy and Shape Your Future in Healthcare.",
  "Accredited by PCI & Affiliated to DBATU – Excellence in Pharmaceutical Education Since Inception.",
  "Cutting-Edge Laboratories and Research Opportunities for Aspiring Pharmacists.",
  "Experienced Faculty, Industrial Exposure, and Skill-Based Learning to Empower Your Career.",
];

const CarouselComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % homePageSlider.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? homePageSlider.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % homePageSlider.length);
  };

  return (
    <div className="relative w-full p-4 bg-white">
      <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden rounded-2xl md:rounded-[40px]">
        {homePageSlider.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl md:rounded-[40px]"
            />

            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl md:rounded-[40px] flex flex-col justify-end p-5 md:p-20">
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-5">
                {/* Year */}
                <div className="text-white text-xl md:text-3xl font-bold">
                  {new Date().getFullYear()}
                </div>

                {/* Slide Text */}
                <div className="text-white text-sm md:text-xl lg:text-2xl font-semibold max-w-full md:max-w-2xl text-left">
                  {slideText[index]}
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3 md:gap-5">
                  <button
                    type="button"
                    onClick={goToPrevious}
                    className="bg-white text-black rounded-2xl p-3 md:p-5 hover:scale-105 transition-transform"
                  >
                    <FaChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    className="bg-[#0D2048] text-white rounded-2xl p-3 md:p-5 hover:scale-105 transition-transform"
                  >
                    <FaChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Optional: Small dot indicators for mobile */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
          {homePageSlider.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === activeIndex ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
