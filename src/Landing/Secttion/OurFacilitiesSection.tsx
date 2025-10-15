import React, { useState, useEffect } from "react";

/**
 * Type definitions for each facility slide
 */
interface FacilitySlide {
  image: string;
  heading: string;
  label: string;
  number1: string;
  number2: string;
  subtext: string;
  description: string;
  tagline: string;
}

/**
 * OurFacilitiesSection Component
 * A rotating, fully responsive hero slider section for Shivaji Pharmacy College.
 */
const OurFacilitiesSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: FacilitySlide[] = [
    {
      image:
        "https://images.unsplash.com/photo-1741795822013-570c944ac5bd?q=80&w=1145&auto=format&fit=crop",
      heading: "Empowering Future Pharmacists Through World-Class Facilities",
      label: "ACTIVE FACILITY",
      number1: "01",
      number2: "06",
      subtext: "Central Library",
      description:
        "A well-stocked library with extensive pharmaceutical references, journals, and digital learning resources.",
      tagline: "Library",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1677603188235-99fbbe4439a0?q=80&w=1171&auto=format&fit=crop",
      heading: "Cutting-Edge Laboratories for Practical Drug Discovery & Research",
      label: "ACTIVE FACILITY",
      number1: "02",
      number2: "06",
      subtext: "Pharmaceutical Research Lab",
      description:
        "Equipped with modern instruments for formulation, quality testing, and analytical research in pharmacy.",
      tagline: "Labs",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?q=80&w=1171&auto=format&fit=crop",
      heading: "Smart Classrooms that Foster Interactive Learning in Health Sciences",
      label: "ACTIVE FACILITY",
      number1: "03",
      number2: "06",
      subtext: "Digital Lecture Halls",
      description:
        "Spacious classrooms equipped with audio-visual tools, smart boards, and e-learning support.",
      tagline: "Classroom",
    },
    {
      image:
        "https://images.unsplash.com/photo-1719159381981-1327b22aff9b?q=80&w=1170&auto=format&fit=crop",
      heading: "Modern Computer Labs for Research and Simulation",
      label: "ACTIVE FACILITY",
      number1: "04",
      number2: "06",
      subtext: "Computer Lab",
      description:
        "Advanced computer labs equipped with pharmaceutical software and high-speed internet for research and analysis.",
      tagline: "Computing",
    },
    {
      image:
        "https://images.unsplash.com/photo-1709805619372-40de3f158e83?q=80&w=1195&auto=format&fit=crop",
      heading: "Hostels with Comfort and Security for Every Student",
      label: "ACTIVE FACILITY",
      number1: "05",
      number2: "06",
      subtext: "Boys and Girls Hostel",
      description:
        "Comfortable, secure, and well-maintained hostels that foster a supportive living environment.",
      tagline: "Hostel",
    },
    {
      image:
        "https://images.unsplash.com/photo-1685391150152-13cce646972c?q=80&w=1633&auto=format&fit=crop",
      heading: "Sports and Fitness for All-Round Development",
      label: "ACTIVE FACILITY",
      number1: "06",
      number2: "06",
      subtext: "Sports & Recreation",
      description:
        "Huge playgrounds for cricket, volleyball, kabaddi and indoor arenas for chess, badminton, and table tennis.",
      tagline: "Sports",
    },
  ];

  const slideDuration = 8000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideDuration);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <div className=" p-2 md:p-4">
      <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-screen overflow-hidden text-white rounded-4xl sm:rounded-[50px] shadow-xl">
        {/* Background Image */}
        <img
          src={slide.image}
          alt="Facility background"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6] transition-opacity duration-1000"
        />

        {/* Overlay Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-10">
          {/* Top Bar */}
          <div className="flex justify-between text-sm sm:text-lg font-light italic mb-4">
            <span>Our Facilities</span>
            <span className="text-base sm:text-2xl text-right">
              {slide.label}
            </span>
          </div>

          {/* Center Content */}
          <div className="flex-grow flex flex-col justify-center max-w-xl sm:max-w-2xl md:max-w-4xl">
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-4 sm:mb-6 line-clamp-3">
              {slide.heading}
            </h1>
          </div>

          {/* Bottom-right Description */}
          <div className="flex justify-end">
            <div className=" p-3 sm:p-4 rounded-lg w-full sm:w-auto max-w-sm md:max-w-md text-white">
              <p className="font-semibold text-lg sm:text-2xl line-clamp-1">
                {slide.subtext}
              </p>
              <p className="text-sm sm:text-lg opacity-80 line-clamp-2">
                {slide.description}
              </p>
            </div>
          </div>

          {/* Slide Number and Tagline */}
          <div className="flex flex-col  relative h-[4rem] sm:h-[6rem]">
            <span className="text-base sm:text-lg font-medium line-clamp-1 ">
              <span className="text-4xl sm:text-6xl">{slide.number1}</span>
              <span className="text-xl sm:text-3xl text-gray-300">
                /{slide.number2}
              </span>
            </span>

            <h2 className="absolute left-0 bottom-[-12px] sm:bottom-[80px] text-4xl sm:text-6xl lg:text-[150px] font-bold opacity-80 uppercase line-clamp-1">
              {slide.tagline}
            </h2>
          </div>
        </div>

        {/* Bottom Progress Bar */}
        <div className="absolute bottom-2 sm:bottom-3 w-full h-2 sm:h-3 overflow-hidden flex justify-center items-center">
          <div className="w-[90%] sm:w-[93%] h-full bg-white/50 rounded-full overflow-hidden">
            <div
              key={currentSlide}
              className="h-full bg-white animate-progress"
              style={{ animationDuration: `${slideDuration}ms` }}
            ></div>
          </div>
        </div>

        {/* Tailwind Animation Keyframes */}
        <style>
          {`
            @keyframes progressFill {
              from { width: 0%; }
              to { width: 100%; }
            }
            .animate-progress {
              animation: progressFill linear forwards;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default OurFacilitiesSection;
