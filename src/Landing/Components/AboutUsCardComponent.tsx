import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Card {
  title: string;
  count: string;
  description: string;
}

const cards: Card[] = [
  {
    title: "Students",
    count: "25,000+",
    description: "Across undergraduate and postgraduate levels",
  },
  {
    title: "Academic",
    count: "18,000+",
    description: "Students get placement at top companies",
  },
  {
    title: "Faculties",
    count: "500+",
    description: "Experienced professors and researchers",
  },
  {
    title: "Alumni",
    count: "40,000+",
    description: "Spread globally in top positions",
  },
];

const AboutUsCardComponent: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % cards.length);
  };

  const leftCard = cards[startIndex];
  const rightCard = cards[(startIndex + 1) % cards.length];

  return (
    <div className="flex flex-col md:flex-row w-full gap-6 md:gap-10 p-4 md:p-10">
      {/* Heading */}
      <div className="md:w-2/5 w-full flex items-center justify-center md:justify-start">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center md:text-left">
          <span className="text-5xl md:text-6xl lg:text-7xl font-medium">S</span>
          CSC of pharmacy{" "}
          <span className="text-gray-500 text-base sm:text-lg md:text-xl">
            at a glance
          </span>
        </h1>
      </div>

      {/* Cards */}
      <div className="md:w-3/5 w-full flex flex-col md:flex-row gap-6">
        {/* Left Card */}
        <div className="flex-1 bg-gray-100 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[250px] md:min-h-[350px]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl border-b-4 border-white text-[#CA8A04] pb-2">
            {leftCard.title}
          </h2>
          <div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-4">
              {leftCard.count}
            </h3>
            <p className="text-sm md:text-lg lg:text-2xl text-gray-500 mt-3">
              {leftCard.description}
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Right Card */}
          <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[200px] md:min-h-[280px]">
            <h2 className="text-2xl md:text-3xl lg:text-4xl border-b-4 border-white text-[#CA8A04] pb-2">
              {rightCard.title}
            </h2>
            <div>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold mt-4">
                {rightCard.count}
              </h3>
              <p className="text-sm md:text-lg lg:text-xl text-gray-500 mt-3">
                {rightCard.description}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-start gap-4 mt-2">
            <button
              type="button"
              onClick={handlePrev}
              className="bg-white rounded-2xl px-4 py-3 border-2 hover:bg-gray-200 transition"
            >
              <FaChevronLeft size={20} className="text-[#0D2048]" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="bg-[#0D2048] rounded-2xl px-4 py-3 hover:bg-[#0b1735] transition"
            >
              <FaChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCardComponent;
