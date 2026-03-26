import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={ref} id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: `translateY(${(1 - scrollProgress) * 50}px)` }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/10 rounded-3xl transform -rotate-6"></div>
            <div className="w-full aspect-square bg-gradient-to-br from-zinc-900 to-black rounded-3xl relative z-10 flex items-center justify-center border border-white/10">
              <div className="text-center p-8">
                <div className="w-40 h-40 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-2xl shadow-purple-900/50">
                  <Icon name="Disc3" size={72} className="text-white" />
                </div>
                <div className="inline-block bg-white/5 border border-white/10 rounded-full px-4 py-1 mb-3">
                  <span className="text-xs text-zinc-400 uppercase tracking-widest">Новый релиз</span>
                </div>
                <p className="text-2xl font-bold text-white tracking-wide">ПОСЛЕДСТВИЯ</p>
                <p className="text-zinc-500 text-sm mt-1">2005</p>
              </div>
            </div>
          </div>

          <div>
            <div
              className={`inline-block bg-white/5 border border-white/10 rounded-full px-4 py-1 mb-4 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <span className="text-xs text-zinc-400 uppercase tracking-widest">Уже доступно</span>
            </div>
            <h2
              className={`text-4xl md:text-6xl font-bold mb-2 text-white tracking-tight transition-all duration-500 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              ПОСЛЕДСТВИЯ
            </h2>
            <p
              className={`text-2xl text-zinc-500 font-light mb-6 transition-all duration-500 delay-150 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              2005
            </p>
            <p
              className={`text-lg mb-8 text-zinc-300 leading-relaxed transition-all duration-500 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Новый трек MALIBU LA KRUZ уже на всех площадках. Слушай прямо сейчас — найди его там, где удобно.
            </p>
            <div
              className={`flex flex-wrap gap-3 transition-all duration-500 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <Button
                className="bg-white text-black hover:bg-zinc-200 rounded-full px-6"
                asChild
              >
                <a href="https://open.spotify.com/artist/4Neeqlt7dUonaPAJ9HEpjL?si=xZCNieFFQjihCfXcdWfNvQ" target="_blank" rel="noopener noreferrer">
                  <Icon name="Music2" size={16} className="mr-2" />
                  Spotify
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-full px-6"
                asChild
              >
                <a href="https://music.apple.com/ru/artist/malibu-la-kruz/1884333293" target="_blank" rel="noopener noreferrer">
                  <Icon name="Music" size={16} className="mr-2" />
                  Apple Music
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-full px-6"
                asChild
              >
                <a href="https://music.yandex.ru/artist/25618058" target="_blank" rel="noopener noreferrer">
                  <Icon name="Headphones" size={16} className="mr-2" />
                  Яндекс Музыка
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
