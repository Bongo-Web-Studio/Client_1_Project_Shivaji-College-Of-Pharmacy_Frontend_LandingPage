import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface CircularItem {
  id: number;
  title: string;
  source: string;
  date: string;
}

interface CircularsProps {
  title?: string;
  subtitle?: string;
  circulars?: CircularItem[];
}

const defaultCirculars: CircularItem[] = [
  {
    id: 1,
    title: "Summer Vacation Assignment [LKG TO IV] 2025-26",
    source: "IISM - PARENTS",
    date: "2025-06-30",
  },
  {
    id: 2,
    title: "CBSE - 49_Notification_2025",
    source: "IISM - PARENTS",
    date: "2025-06-24",
  },
  {
    id: 3,
    title: "Collection of original CBSE MarkSheet Class 10 - 2024-25",
    source: "IISM - Parent",
    date: "2025-06-23",
  },
  {
    id: 4,
    title: "RESULT DECLARATION CLASS X AND XII",
    source: "IISM",
    date: "2025-05-20",
  },
  {
    id: 5,
    title: "Invitation for Quotation Civil Defense 2025",
    source: "IISM",
    date: "2025-05-19",
  },
  {
    id: 6,
    title: "NOTICE TO PARENTS OF LKG & UKG STUDENTS",
    source: "IISM - Parents",
    date: "2025-05-07",
  },
];

const CircularSection: React.FC<CircularsProps> = ({
  title = "CircularSection",
  subtitle = "Discover the Latest Circulars in SCSC of Pharmacy",
  circulars = defaultCirculars,
}) => {
  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-center items-center mt-10">
      {/* Section Header */}
      <div className="text-center mb-6">
        <h1 className="text-base sm:text-lg italic text-gray-600">{title}</h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-2 leading-tight max-w-4xl mx-auto">
          {subtitle}
        </h2>
      </div>

      {/* Circular Cards */}
      <div className="w-full flex flex-wrap justify-center mt-10 gap-6">
        {circulars.slice(0, 9).map((item, index) => (
          <div
            key={item.id}
            className="w-full sm:w-[48%] lg:w-[32%] bg-white rounded-3xl transition-all hover:shadow-xl p-4"
          >
            <div className="w-full h-auto rounded-3xl overflow-hidden bg-[#F3F4F6] flex flex-col sm:flex-row justify-between items-center p-6 gap-4">
              {/* Date + Number */}
              <div className="text-center sm:text-left">
                <h3>
                  <span className="text-[#CA8A04] text-lg sm:text-xl font-semibold">
                    {item.date}
                  </span>
                </h3>
                <p className="text-gray-400 text-sm">
                  No <span className="text-gray-600 font-medium">{index + 1}</span>
                </p>
              </div>

              {/* Download Button */}
              <button className="text-base sm:text-lg font-semibold px-4 py-2 bg-[#81F97C] rounded-2xl hover:bg-[#6EE06B] transition-colors">
                Download
              </button>
            </div>

            {/* Details Section */}
            <div className="mt-4">
              <h4 className="text-lg sm:text-xl font-semibold line-clamp-2">
                {item.title}
              </h4>

              <div className="flex justify-between items-center mt-4">
                <span className="text-sm sm:text-base text-gray-600">{item.source}</span>
                <span className="text-sm sm:text-base flex gap-2 items-center text-gray-700 cursor-pointer hover:text-[#CA8A04] transition-colors">
                  See more{" "}
                  <span className="p-2 bg-gray-100 rounded-lg border text-gray-600">
                    <FaArrowRight />
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularSection;
