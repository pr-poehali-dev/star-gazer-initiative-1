import { useRef, useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

interface Platform {
  name: string;
  description: string;
  color: string;
  bgColor: string;
  logo: React.ReactNode;
  href: string;
}

const SpotifyLogo = () => (
  <svg viewBox="0 0 24 24" fill="#1DB954" width="28" height="28">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const AppleMusicLogo = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
    <path d="M18.15 11.4c-.03-2.94 2.4-4.35 2.51-4.42-1.37-2-3.5-2.27-4.26-2.3-1.81-.18-3.54 1.07-4.46 1.07-.92 0-2.34-1.04-3.85-1.02C5.9 4.76 3.77 5.97 2.6 7.9.24 11.8 1.98 17.56 4.26 20.72c1.13 1.65 2.48 3.49 4.25 3.43 1.71-.07 2.35-1.1 4.41-1.1 2.05 0 2.63 1.1 4.42 1.07 1.84-.03 2.99-1.67 4.12-3.32.3-.44.57-.9.81-1.38-3.37-1.3-3.1-4.97-3.12-5.02z" fill="#FC3C44"/>
    <path d="M15.07 3.1C16 1.98 16.62.48 16.45 0c-1.37.06-3.05.93-4.03 2.03-.88 1-1.66 2.6-1.45 4.12 1.52.12 3.07-.78 4.1-2.05z" fill="#FC3C44"/>
  </svg>
);

const VKLogo = () => (
  <svg viewBox="0 0 24 24" fill="#0077FF" width="28" height="28">
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C5.1 11.7 4.42 9.5 4.42 9.05c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.854c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
  </svg>
);

const YandexMusicLogo = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
    <circle cx="12" cy="12" r="12" fill="#FFCC00"/>
    <path d="M13.24 6H11.1v12h2.14v-4.72l3.62 4.72H19.3l-4.1-5.22L19 6h-2.38l-3.38 4.44V6zM7.86 6H5v12h2.86V6z" fill="#000"/>
  </svg>
);

const platforms: Platform[] = [
  {
    name: "Spotify",
    description: "Слушай треки и плейлисты",
    color: "#1DB954",
    bgColor: "rgba(29,185,84,0.1)",
    logo: <SpotifyLogo />,
    href: "https://open.spotify.com/artist/4Neeqlt7dUonaPAJ9HEpjL?si=xZCNieFFQjihCfXcdWfNvQ",
  },
  {
    name: "Apple Music",
    description: "Доступно на всех устройствах Apple",
    color: "#FC3C44",
    bgColor: "rgba(252,60,68,0.1)",
    logo: <AppleMusicLogo />,
    href: "https://music.apple.com/ru/artist/malibu-la-kruz/1884333293",
  },
  {
    name: "ВКонтакте",
    description: "Подпишись и слушай бесплатно",
    color: "#0077FF",
    bgColor: "rgba(0,119,255,0.1)",
    logo: <VKLogo />,
    href: "https://vk.ru/artist/malibulakruz",
  },
  {
    name: "Яндекс Музыка",
    description: "Слушай с умными рекомендациями",
    color: "#FFCC00",
    bgColor: "rgba(255,204,0,0.1)",
    logo: <YandexMusicLogo />,
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
                    {platform.logo}
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-1" style={{ color: platform.color }}>
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