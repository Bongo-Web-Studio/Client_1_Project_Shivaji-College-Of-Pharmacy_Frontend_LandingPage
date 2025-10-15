import React from "react";
import {
  FaGraduationCap,
  FaUniversity,
  FaLayerGroup,
  FaGlobe,
} from "react-icons/fa";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features1: Feature[] = [
  {
    id: "01",
    title: "Academic Excellence",
    icon: <FaGraduationCap size={40} />,
    description:
      "SCSC of Pharmacy provides a rigorous academic curriculum with a strong focus on pharmaceutical sciences, shaping competent and ethical professionals.",
  },
  {
    id: "02",
    title: "Experienced Faculty",
    icon: <FaUniversity size={40} />,
    description:
      "Our students benefit from guidance by qualified faculty members with industry and research experience committed to quality education and mentorship.",
  },
];

const features2: Feature[] = [
  {
    id: "03",
    title: "Modern Infrastructure",
    icon: <FaLayerGroup size={40} />,
    description:
      "Well-equipped laboratories, digital classrooms, and a comprehensive library create an environment that supports hands-on learning and innovation.",
  },
];

const features3: Feature[] = [
  {
    id: "04",
    title: "Industry & Alumni Connect",
    icon: <FaGlobe size={40} />,
    description:
      "Strong ties with industry leaders and an active alumni network open doors for internships, placements, and continuous professional development.",
  },
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <div className="p-4 md:p-6">
      <section className="bg-[#101010] text-white p-6 md:p-12 rounded-[20px] md:rounded-[40px] max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center md:text-left">
          <h2 className="text-sm md:text-lg italic text-gray-400 font-medium">
            Why Choose Us
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-semibold leading-tight mb-6">
            Empowering Pharma Professionals for Tomorrow
          </h1>
        </div>

        {/* First Row */}
        <div className="w-full flex flex-col md:flex-row mt-12 md:mt-20 gap-8 md:gap-0">
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <p className="max-w-[600px] text-gray-400 mb-6 md:mb-12 text-base md:text-lg text-center md:text-left">
              At Shri Chhatrapati Shivaji College of Pharmacy, we blend academic
              rigor with practical training, preparing students to lead and
              innovate in the ever-evolving pharmaceutical industry.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="flex flex-wrap justify-center gap-6">
              {features2.map((feature) => (
                <div
                  key={feature.id}
                  className="rounded-3xl p-6 bg-[#242424] w-[280px] sm:w-[300px] border border-white/40 text-center md:text-left"
                >
                  <div className="text-xl md:text-2xl text-[#CA8A04] font-semibold">
                    {feature.id}
                  </div>
                  <div className="mt-6 mb-4 flex justify-center md:justify-start">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl mb-2 font-medium">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-md text-gray-400 line-clamp-4">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="w-full flex flex-col md:flex-row mt-12 md:mt-20 gap-8 md:gap-0">
          <div className="md:w-1/2 flex flex-wrap justify-center md:justify-start gap-6">
            {features1.map((feature) => (
              <div
                key={feature.id}
                className="rounded-3xl p-6 bg-[#101010] w-[280px] sm:w-[300px] border border-white/40 text-center md:text-left"
              >
                <div className="text-xl md:text-2xl text-[#CA8A04] font-semibold">
                  {feature.id}
                </div>
                <div className="mt-6 mb-4 flex justify-center md:justify-start">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl mb-2 font-medium">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-md text-gray-400 line-clamp-4">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            {features3.map((feature) => (
              <div
                key={feature.id}
                className="rounded-3xl p-6 bg-[#101010] w-[280px] sm:w-[300px] border border-white/40 text-center md:text-left"
              >
                <div className="text-xl md:text-2xl text-[#CA8A04] font-semibold">
                  {feature.id}
                </div>
                <div className="mt-6 mb-4 flex justify-center md:justify-start">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl mb-2 font-medium">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-md text-gray-400 line-clamp-4">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUsSection;
