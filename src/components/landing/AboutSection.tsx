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
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl transform -rotate-3"></div>
            <div className="w-full aspect-square rounded-3xl relative z-10 overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/409f6f8c-1919-4012-a1da-212c5297ff62/bucket/aace0ccd-deec-46a5-ac52-f2f092cb2881.jpg"
                alt="ПОСЛЕДСТВИЯ 2005 — обложка релиза"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1 mb-2">
                  <span className="text-xs text-white uppercase tracking-widest">Новый релиз · 2026</span>
                </div>
                <p className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">ПОСЛЕДСТВИЯ 2005</p>
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
              className={`text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight transition-all duration-500 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              ПОСЛЕДСТВИЯ 2005
            </h2>
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