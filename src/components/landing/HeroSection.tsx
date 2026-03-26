import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Disc3, Music2, AudioWaveform } from "lucide-react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const opacity = Math.max(0, 1 - scrolled / (windowHeight * 0.5));
      setScrollOpacity(opacity);
      setScrollY(scrolled * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { icon: <Play className="w-6 h-6" />, label: "Стримов", value: "1M+" },
    { icon: <Disc3 className="w-6 h-6" />, label: "Треков", value: "50+" },
    { icon: <Music2 className="w-6 h-6" />, label: "Площадок", value: "8+" },
    { icon: <AudioWaveform className="w-6 h-6" />, label: "Лет в музыке", value: "5+" },
  ];

  return (
    <section ref={containerRef} className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black"></div>
      </div>

      <div
        style={{ transform: `translateY(${scrollY}px)`, opacity: scrollOpacity }}
        className="relative pt-40 pb-16 px-4 transition-opacity duration-100 flex items-center min-h-screen"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
                MALIBU LA KRUZ
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-zinc-400 max-w-3xl mx-auto">
              Музыкант. Автор. Исполнитель. Слушай новые треки на всех популярных площадках — выбери свою и наслаждайся музыкой прямо сейчас.
            </p>
            <div className="relative inline-block">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-zinc-200 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => document.getElementById("streaming")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10">Слушать музыку</span>
                <span
                  className={`ml-2 relative z-10 transition-transform duration-200 ${
                    isHovered ? "translate-x-1" : ""
                  }`}
                >
                  &rarr;
                </span>
              </Button>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;