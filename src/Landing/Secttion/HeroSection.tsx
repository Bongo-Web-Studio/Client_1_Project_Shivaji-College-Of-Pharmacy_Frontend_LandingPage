import React from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

interface Button {
  label: string;
  link: string;
}

interface HeroData {
  trustBadge: string;
  title: string;
  highlight: string;
  description: string;
  primaryBtn: Button;
  secondaryBtn: Button;
}

/**
 * Hero-Section Component
 *
 * Displays the school's hero section with animated heading, description, and CTA buttons.
 * - Heading has a typing-like animation with blur, fade-in, and scale.
 * - Description appears from below with a "snap" effect.
 */
const HeroSection: React.FC = () => {
  const heroData: HeroData = {
    trustBadge: "Trusted by 500+ Students & Parents",
    title: "Empowering Students For A Brighter Future",
    highlight: "Brighter Future",
    description:
      "Your journey to academic excellence begins here — with mentors who inspire and a system that delivers results for NEET, JEE, CAT, and State Board exams.",
    primaryBtn: { label: "Apply for Admission", link: "/admission" },
    secondaryBtn: { label: "About Us", link: "/about" },
  };

  // Split title into before-highlight, highlight, after-highlight
  const highlightIndex = heroData.title.indexOf(heroData.highlight);
  const beforeHighlight = heroData.title.slice(0, highlightIndex);
  const afterHighlight = heroData.title.slice(
    highlightIndex + heroData.highlight.length
  );

  // Typing effect for heading
  const headingVariant: Variants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Word-by-word typing animation
  const wordVariant: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.4 },
    }),
  };

  // Description "snap from below" animation
  const descriptionVariant: Variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut", delay: 1.2 },
    },
  };

  const titleWords =
    `${beforeHighlight}${heroData.highlight}${afterHighlight}`.split(" ");

  return (
    <section className="text-black text-center overflow-hidden px-4 sm:px-6 md:px-12 lg:px-20 py-2"> 
      {/* Main Title */}
      <motion.h1
        style={{ fontFamily: "InstrumentSerif" }}
        className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl max-w-4xl lg:max-w-5xl mx-auto flex flex-wrap justify-center text-[#0D2048]  leading-tight"
        initial="hidden"
        animate="visible"
        variants={headingVariant}
      >
        {titleWords.map((word, i) => (
          <motion.span
            key={i}
            className={
              word === heroData.highlight ? "text-[#E21E22] font-bold" : ""
            }
            variants={wordVariant}
            initial="hidden"
            animate="visible"
            custom={i}
            style={{ marginRight: "0.4em" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-sm sm:text-lg md:text-xl text-gray-500 mt-6 max-w-3xl sm:max-w-2xl mx-auto "
        variants={descriptionVariant}
        initial="hidden"
        animate="visible"
      >
        {heroData.description}
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex justify-center gap-4 mt-8 flex-wrap"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <Link
          to={heroData.primaryBtn.link}
          className="bg-[#0D2048] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl  text-lg sm:text-xl transition-colors duration-300"
        >
          {heroData.primaryBtn.label}
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
