import React from "react";
import { FaArrowRight } from "react-icons/fa";

// Type definition for program item
interface Program {
  id: string;
  title: string;
  description: string;
}

// Sample program data
const programs: Program[] = [
  {
    id: "01",
    title: "D.Pharm (Diploma in Pharmacy)",
    description:
      "A two-year diploma course approved by PCI and MSBTE with an intake of 60 students, focused on foundational pharmaceutical education and practical training.",
  },
  {
    id: "02",
    title: "B.Pharm (Bachelor of Pharmacy)",
    description:
      "A four-year undergraduate program affiliated to DBATU, Lonere with an intake of 60 students, offering advanced knowledge in pharmacy and drug sciences.",
  },
  {
    id: "03",
    title: "PCI & DTE Approved",
    description:
      "Recognized by the Pharmacy Council of India, New Delhi, and the Directorate of Technical Education, Government of Maharashtra, ensuring quality and compliance.",
  },
  {
    id: "04",
    title: "Excellence in Research & Education",
    description:
      "With a dedicated team of experienced faculty, the college aims to remain at the forefront of pharmaceutical education and research in a globally competitive environment.",
  },
];

/**
 * OurProgramsSection Component
 * Displays college academic programs with responsive layout.
 */
const OurProgramsSection: React.FC = () => {
  return (
    <section className="flex flex-col w-full min-h-screen bg-white  p-8">
      {/* Header */}
      <h4 className="text-sm md:text-lg text-gray-600 italic mb-4">
        Our Programs
      </h4>

      {/* Title and Image */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8">
        {/* Left Text Section */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Empowering Future Pharmacists <br />
            Through{" "}
            <span   style={{ fontFamily: "InstrumentSerif" }}  className="text-yellow-600">Quality Education</span> and 
            RealWorld Excellence
          </h1>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src="https://www.shivajipharma.com/assets/img/lab.jpg"
            alt="Program Visual"
            className="rounded-3xl object-cover w-full max-w-[400px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[250px]"
          />
        </div>
      </div>

      {/* Program List */}
      <div className="w-full mt-12 space-y-10 ">
        {programs.map((program) => (
          <div
            key={program.id}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 py-6 border-b border-gray-100"
          >
            {/* Left Section: ID & Title */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 w-full sm:w-[70%]">
              <h1 className="text-yellow-600 font-light text-3xl sm:text-4xl">
                {program.id}
              </h1>

              <div className="flex  flex-col  md:flex-row w-full">
                <h2 className=" text-2xl md:text-4xl font-medium mb-1  w-[70%] ">
                  {program.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed  w-[70%] ">
                  {program.description}
                </p>
              </div>
            </div>

            {/* Right Section: Arrow Button */}
            <button className="text-black hover:text-yellow-700 transition-all duration-200 bg-[#F3F4F6]  border-gray-200 p-5 rounded-3xl border-2 flex justify-center items-center">
              <FaArrowRight size={25} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProgramsSection;
