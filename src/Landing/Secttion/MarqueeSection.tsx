import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface NewsItem {
  id: number;
  news: string;
  icon: React.ReactNode;
}

const newsScroll: NewsItem[] = [
  {
    id: 1,
    news: "List of Selected Students for Youth Leadership Training Programm",
    icon: "🚀",
  },
  { id: 2, news: "Pharmacy Council of India (PCI)", icon: "🎉" },
  { id: 3, news: "Pharmacy Council of India (PCI)", icon: "📰" },
  { id: 4, news: "Pharmacy Council of India (PCI)", icon: "🌟" },
  { id: 5, news: "Pharmacy Council of India (PCI)", icon: "⚡" },
];

const MarqueeSection: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    marquee.innerHTML += marquee.innerHTML; // duplicate content

    const tl = gsap.to(marquee, {
      xPercent: -50,
      duration: 40,
      repeat: -1,
      ease: "linear",
    });

    tlRef.current = tl;

    return () => {
      if (tlRef.current) {
        tlRef.current.kill(); // proper cleanup
        tlRef.current = null;
      }
    };
  }, []);

  const handleMouseEnter = () => tlRef.current?.pause();
  const handleMouseLeave = () => tlRef.current?.play();

  return (
    <div
      className="group relative bg-white text-black overflow-hidden border-b-2 h-[12vh] sm:h-[10vh] xs:h-[8vh]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden h-full">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap gap-6 sm:gap-4 xs:gap-2 will-change-transform"
        >
          {newsScroll.map((item) => (
            <span
              key={item.id}
              className="text-3xl sm:text-2xl xs:text-lg font-semibold flex items-center gap-2"
            >
              {item.icon} {item.news}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
