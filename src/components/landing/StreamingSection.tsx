import { useRef, useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import Icon from "@/components/ui/icon";

interface Platform {
  name: string;
  description: string;
  color: string;
  bgColor: string;
  icon: string;
  href: string;
}

const platforms: Platform[] = [
  {
    name: "Spotify",
    description: "Слушай треки и плейлисты",
    color: "#1DB954",
    bgColor: "rgba(29,185,84,0.1)",
    icon: "Music2",
    href: "https://open.spotify.com/artist/4Neeqlt7dUonaPAJ9HEpjL?si=xZCNieFFQjihCfXcdWfNvQ",
  },
  {
    name: "Apple Music",
    description: "Доступно на всех устройствах Apple",
    color: "#FC3C44",
    bgColor: "rgba(252,60,68,0.1)",
    icon: "Music",
    href: "https://music.apple.com/ru/artist/malibu-la-kruz/1884333293",
  },
  {
    name: "ВКонтакте",
    description: "Подпишись и слушай бесплатно",
    color: "#0077FF",
    bgColor: "rgba(0,119,255,0.1)",
    icon: "Users",
    href: "https://vk.ru/artist/malibulakruz",
  },
  {
    name: "Яндекс Музыка",
    description: "Слушай с умными рекомендациями",
    color: "#FFCC00",
    bgColor: "rgba(255,204,0,0.1)",
    icon: "Headphones",
    href: "https://music.yandex.ru/artist/25618058",
  },
];

const StreamingSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="streaming" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black"></div>

      <div className="container mx-auto px-4 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Слушать музыку</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Музыка доступна на всех популярных площадках — выбери удобную и наслаждайся
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                className="relative rounded-2xl border border-white/10 p-6 h-full transition-all duration-300 group-hover:scale-105 group-hover:border-white/20"
                style={{ background: `linear-gradient(135deg, ${platform.bgColor}, rgba(0,0,0,0.8))` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: platform.bgColor, border: `1px solid ${platform.color}30` }}
                  >
                    <Icon name={platform.icon} fallback="Music" size={24} style={{ color: platform.color }} />
                  </div>
                  <ExternalLink
                    className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors"
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: platform.color }}
                >
                  {platform.name}
                </h3>
                <p className="text-sm text-zinc-400">{platform.description}</p>
                <div
                  className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ backgroundColor: platform.color }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamingSection;