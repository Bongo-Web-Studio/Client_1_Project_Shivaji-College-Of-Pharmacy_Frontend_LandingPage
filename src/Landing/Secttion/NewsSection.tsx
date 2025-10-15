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
      "https://shivajipharma.com/uploads/gallery/1759213659_30f624274c91049b3c88.jpg",
    date: "10 Jun 2025",
    title: "Shivaji Pharmacy College Hosts World Pharmacist Day Celebration",
    readTime: "6 min Read",
  },
  {
    id: 2,
    image:
      "https://shivajipharma.com/uploads/gallery/1756968290_8cd92d028c673e4e4eca.jpg",
    date: "11 Jun 2025",
    title:
      "Hospital Pharmacy Visit Our Pharmacy Student Visited Panchshil Medical located in Hedgewar Hospital, Chhatrapati Sambhajinagar",
    readTime: "4 min Read",
  },
  {
    id: 3,
    image:
      "https://shivajipharma.com/uploads/gallery/1756969639_57bf97dcf832562fbc6f.jpg",
    date: "12 Jun 2025",
    title:
      " Annual Gathering held at Shri Chhatrapati Shivaji College of Pharmacy",
    readTime: "5 min Read",
  },
  {
    id: 4,
    image:
      "https://shivajipharma.com/uploads/gallery/1759215048_c5c1cc86ff7a324cdd7b.jpg",
    date: "13 Jun 2025",
    title: "Marathwada Mukti Sangram Din 17th September 2025 Celebration at Shivaji Pharmacy College",
    readTime: "7 min Read",
  },
  {
    id: 5,
    image:
      "https://shivajipharma.com/uploads/gallery/1759216108_dc1c66372d11261001ad.jpg",
    date: "14 Jun 2025",
    title: "Teacher Day Celebration!!Teachers' Day was celebrated with great enthusiasm at Shri Chhatrapati Shivaji College of Pharmacy. The highlight of this program was that the students played the role of teachers and made the day unforgettable under their guidance. On this occasion, all the respected teachers of the college were felicitated on behalf of the students. The students experienced teaching from the role of teachers and expressed their gratitude towards the teachers. At the end of the program, the Principal of the college, Dr. Rahul Kshirsagar Sir, gave valuable guidance to the students, which will definitely be useful to them in the future. Heartfelt thanks to all the students and teachers who worked hard to make this day a successful event.",
    readTime: "6 min Read",
  },
  {
    id: 6,
    image:
      "https://shivajipharma.com/uploads/gallery/1756972287_3e2ac5dfa8a3b164ae05.jpg",
    date: "15 Jun 2025",
    title:
      "Annual Gathering Sports Events",
    readTime: "3 min Read",
  },
];

const NewsSection: React.FC = () => {
  return (
    <div className="bg-white px-4 sm:px-6 lg:px-20 py-12 flex flex-col justify-center items-center">
      {/* Section Heading */}
      <div className="text-center">
        <h2 className="text-lg italic text-gray-600">News</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mt-4">
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
                <span className="text-gray-400 text-sm sm:text-base">
                  {item.readTime}
                </span>
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
