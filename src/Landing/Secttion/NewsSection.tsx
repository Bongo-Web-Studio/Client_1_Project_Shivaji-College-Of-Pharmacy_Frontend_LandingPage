import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface NewsItem {
  id: number;
  image: string;
  date: string;
  title: string;
  readTime: string;
}

// News Data for Shivaji Pharmacy College
const newsItems: NewsItem[] = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1682974407026-581fe0e550ea?fm=jpg&q=60&w=3000",
    date: "10 Jun 2025",
    title:
      "Shivaji Pharmacy College Hosts National Seminar on Advances in Pharmaceutical Sciences",
    readTime: "6 min Read",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1682974407026-581fe0e550ea?fm=jpg&q=60&w=3000",
    date: "11 Jun 2025",
    title:
      "Final-Year B.Pharm Students Achieve 100% Placement in Top Pharma Companies",
    readTime: "4 min Read",
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1682974407026-581fe0e550ea?fm=jpg&q=60&w=3000",
    date: "12 Jun 2025",
    title:
      "Faculty Members Recognized by PCI for Contributions to Pharmacy Education",
    readTime: "5 min Read",
  },
  {
    id: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1682974407026-581fe0e550ea?fm=jpg&q=60&w=3000",
    date: "13 Jun 2025",
    title: "New MoU Signed with Global Pharmaceutical R&D Companies",
    readTime: "7 min Read",
  },
  {
    id: 5,
    image:
      "https://plus.unsplash.com/premium_photo-1682974407026-581fe0e550ea?fm=jpg&q=60&w=3000",
    date: "14 Jun 2025",
    title: "AI-Based Tools Integrated into the Pharmacy Curriculum",
    readTime: "6 min Read",
  },
  {
    id: 6,
    image:
      "https://plus.unsplash.com/premium_photo-1682974407026-581fe0e550ea?fm=jpg&q=60&w=3000",
    date: "15 Jun 2025",
    title: "Shivaji College Celebrates World Pharmacist Day with Awareness Drives",
    readTime: "3 min Read",
  },
];

const NewsSection: React.FC = () => {
  return (
    <div className="bg-white px-4 sm:px-6 lg:px-20 py-12 flex flex-col justify-center items-center">
      {/* Section Heading */}
      <div className="text-center">
        <h2 className="text-lg italic text-gray-600">News</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-4">
          Discover the Latest News in SCSC of Pharmacy
        </h1>
      </div>

      {/* News Cards */}
      <div className="mt-12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="mt-4 flex flex-col flex-1 justify-between">
              <p className="text-gray-400 text-sm sm:text-base">{item.date}</p>
              <h3 className="text-xl sm:text-2xl mt-2 font-semibold line-clamp-3">
                {item.title}
              </h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-400 text-sm sm:text-base">{item.readTime}</span>
                <span className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                  Read more
                  <span className="p-2 bg-gray-100 rounded-lg border-2 border-gray-300">
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

export default NewsSection;
