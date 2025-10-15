import React from "react";

interface EventItem {
  width: string;
  height: string;
  image: string;
  title: string;
  year: string;
  location: string;
  titleSize: string;
  yearSize: string;
  locationSize: string;
}

type EventSection = EventItem[][];

const eventSections: EventSection = [
  [
    {
      width: "16cm",
      height: "11cm",
      image: "https://shivajipharma.com/assets/image_gallery/6.jpeg",
      title: "Pharma Research Summit",
      year: "2025",
      location: "Central Auditorium",
      titleSize: "text-2xl md:text-3xl sm:text-2xl",
      yearSize: "text-xl md:text-2xl sm:text-xl",
      locationSize: "text-xl md:text-2xl sm:text-xl",
    },
    {
      width: "13cm",
      height: "9cm",
      image: "https://shivajipharma.com/assets/image_gallery/2.jpeg",
      title: "Cultural Fest: Arogya 2K25",
      year: "2025",
      location: "Open Grounds",
      titleSize: "text-2xl md:text-xl sm:text-lg",
      yearSize: "text-xl md:text-lg sm:text-base",
      locationSize: "text-xl md:text-xl sm:text-lg",
    },
  ],
  [
    {
      width: "16cm",
      height: "11cm",
      image: "https://shivajipharma.com/assets/image_gallery/7.jpeg",
      title: "Industrial Visit: Cipla Ltd",
      year: "2025",
      location: "Goa Facility",
      titleSize: "text-2xl md:text-3xl sm:text-2xl",
      yearSize: "text-xl md:text-2xl sm:text-xl",
      locationSize: "text-xl md:text-2xl sm:text-xl",
    },
  ],
  [
    {
      width: "13cm",
      height: "9cm",
      image: "https://shivajipharma.com/assets/image_gallery/3.jpeg",
      title: "Seminar: Clinical Trials Ethics",
      year: "2025",
      location: "Seminar Hall B",
      titleSize: "text-2xl md:text-xl sm:text-lg",
      yearSize: "text-xl md:text-lg sm:text-base",
      locationSize: "text-xl md:text-xl sm:text-lg",
    },
    {
      width: "16cm",
      height: "11cm",
      image: "https://shivajipharma.com/assets/image_gallery/4.jpeg",
      title: "Alumni Meet & Awards Night",
      year: "2025",
      location: "Main Auditorium",
      titleSize: "text-2xl md:text-3xl sm:text-2xl",
      yearSize: "text-xl md:text-2xl sm:text-xl",
      locationSize: "text-xl md:text-2xl sm:text-xl",
    },
  ],
];

const EventsSection: React.FC = () => {
  return (
    <div className="bg-white p-6 flex flex-col justify-center items-center w-full">
      {/* Section Headers */}
      <h1 className="text-base sm:text-lg text-gray-600">Events</h1>
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-medium mt-2">
        Lectures, Conferences, Cultural
      </h1>
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-medium">
        Moments & More
      </h1>

      {/* Event Grid */}
      {eventSections.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`w-full flex flex-col sm:flex-row flex-wrap justify-center items-start md:gap-[10rem]  ${
            rowIndex === 1 ? "mt-10 md:mt-16" : "mt-20"
          }`}
        >
          {row.map((event, index) => (
            <div
              key={index}
              className="flex flex-col items-start w-full sm:w-[48%] md:w-[45%] lg:w-[40%] xl:w-[35%]"
            >
              {/* Event Image */}
              <div
                className="w-full bg-gray-500 rounded-3xl overflow-hidden shadow-lg"
                style={{ aspectRatio: "16 / 10" }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Event Details */}
              <div className="w-full flex mt-4 justify-between items-start">
                <div className="flex flex-col justify-start items-start w-[60%]">
                  <h1 className={`${event.titleSize} font-medium`}>
                    {event.title}
                  </h1>
                  <h1 className={`${event.yearSize} text-gray-400`}>
                    {event.year}
                  </h1>
                </div>
                <div className="w-[40%] text-end">
                  <h1
                    className={`${event.locationSize} text-[#CA8A04]/60 font-medium`}
                  >
                    {event.location}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EventsSection;
