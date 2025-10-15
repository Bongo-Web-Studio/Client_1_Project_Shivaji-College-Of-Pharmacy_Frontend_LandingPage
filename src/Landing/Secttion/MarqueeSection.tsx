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
      duration: 10,
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
      className="group relative bg-white text-[#CA8A04] overflow-hidden border-b-2   h-[10vh] sm:h-[15vh] "
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
              className="text-5xl sm:text-8xl  flex items-center gap-2 text-[#0D2048] mt-5 md:mt-0  cursor-pointer"
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
