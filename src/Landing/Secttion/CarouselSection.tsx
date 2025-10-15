import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Slide {
  image: string;
  text: string;
}

const slides: Slide[] = [
  {
    image: "https://www.shivajipharma.com/assets/img/banner/s-4.jpg",
    text: "Admissions Open 2025 – Join Shri Chhatrapati Shivaji College of Pharmacy and Shape Your Future in Healthcare.",
  },
  {
    image: "https://www.shivajipharma.com/assets/img/banner/s-3.webp",
    text: "Accredited by PCI & Affiliated to DBATU – Excellence in Pharmaceutical Education Since Inception.",
  },
  {
    image:
      "https://shivajipharma.com/uploads/sliders/1756893553_260d8309db7113da0daf.jpg",
    text: "Cutting-Edge Laboratories and Research Opportunities for Aspiring Pharmacists.",
  },
  {
    image:
      "https://shivajipharma.com/uploads/sliders/1756893631_9e61671b3515d9aca87e.jpg",
    text: "Experienced Faculty, Industrial Exposure, and Skill-Based Learning to Empower Your Career.",
  },

  {
    image:
      "https://shivajipharma.com/uploads/sliders/1756893739_d2149685ee48d72cd6f6.jpg",
    text: "Experienced Faculty, Industrial Exposure, and Skill-Based Learning to Empower Your Career.",
  },
  {
    image:
      "https://shivajipharma.com/uploads/sliders/1756967768_4a39504439ab91fbfd89.jpg",
    text: "Experienced Faculty, Industrial Exposure, and Skill-Based Learning to Empower Your Career.",
  },
];

const CarouselSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Auto-slide every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full p-2 md:p-4">
      <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden rounded-4xl md:rounded-[60px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl md:rounded-[40px]"
            />

            {/* Overlay */}
            <div className="absolute inset-0  bg-opacity-30 rounded-2xl md:rounded-[40px] flex flex-col justify-end p-5 md:p-20">
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-5">
                {/* Year */}
                <div className="text-white text-4xl md:text-6xl font-bold">
                  {new Date().getFullYear()}
                </div>

                {/* Slide Text */}
                <div className="text-white text-lg md:text-xl lg:text-2xl font-semibold max-w-full md:max-w-2xl text-left">
                  {slide.text}
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3 md:gap-5">
                  <button
                    type="button"
                    onClick={goToPrevious}
                    className="bg-white text-[#0D2048] rounded-2xl md:rounded-3xl p-4 md:p-6 hover:scale-105 transition-transform  duration-300 cursor-pointer"
                  >
                    <FaChevronLeft className="text-xl md:text-3xl" />
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    className="bg-[#0D2048] text-white rounded-2xl md:rounded-3xl p-4  md:p-6 hover:scale-105 transition-transform  duration-300 cursor-pointer"
                  >
                    <FaChevronRight className="text-xl md:text-3xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Small dot indicators */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
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

export default CarouselSection;
