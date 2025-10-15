import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface Circular {
  id: number;
  title: string;
  source: string;
  date: string;
}

const circulars: Circular[] = [
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

const NoticeSection: React.FC = () => {
  return (
    <section className="bg-white px-6 py-12 flex flex-col justify-center items-center mt-20">
      {/* Heading */}
      <div className="text-center space-y-3">
        <h1 className="text-lg italic text-gray-600">Notices</h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900 max-w-4xl mx-auto">
          Discover the Latest Notices in SCSC of Pharmacy
        </h2>
      </div>

      {/* Circular Cards */}
      <div className="w-full flex flex-wrap justify-center gap-6 mt-16">
        {circulars.map((item, index) => (
          <div
            key={item.id}
            className="w-full sm:w-[48%] lg:w-[32%] bg-white"
          >
            {/* Date and Download Section */}
            <div className="w-full h-auto rounded-3xl bg-gray-100 flex flex-col sm:flex-row justify-between items-center p-6 sm:p-8 gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center sm:text-left">
                <p className="text-[#CA8A04] text-xl sm:text-2xl font-semibold">
                  {item.date}
                </p>
                <p className="text-gray-500 text-base sm:text-lg">
                  No <span className="font-medium">{index + 1}</span>
                </p>
              </div>
              <button className="text-lg font-semibold px-6 py-2 bg-[#81F97C] rounded-2xl transition-all hover:bg-[#6ee46a]">
                Download
              </button>
            </div>

            {/* Title and Source Section */}
            <div className="mt-5 px-1">
              <h3 className="text-xl sm:text-2xl font-semibold line-clamp-3 text-gray-900">
                {item.title}
              </h3>
              <div className="flex justify-between items-center mt-6 text-gray-600 text-base sm:text-lg">
                <span>{item.source}</span>
                <span className="flex items-center gap-2 cursor-pointer hover:text-gray-800 transition-colors">
                  See more{" "}
                  <span className="p-2 bg-gray-100 rounded-lg border border-gray-300">
                    <FaArrowRight />
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NoticeSection;
