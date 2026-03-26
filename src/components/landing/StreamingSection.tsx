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
  <svg viewBox="0 0 24 24" fill="#FC3C44" width="28" height="28">
    <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.04.958 1.084 1.88.475 3.18a4.98 4.98 0 00-.36 1.627c-.025.281-.04.563-.04.846v12.29c0 .283.015.565.04.847.05.538.16 1.063.37 1.565.54 1.274 1.46 2.175 2.77 2.7.612.24 1.252.35 1.916.385.09.005.18.009.27.012l.444.005h11.34c.283 0 .566-.015.85-.04.535-.05 1.057-.16 1.558-.37 1.272-.54 2.174-1.46 2.698-2.765.242-.613.35-1.252.386-1.917.004-.089.008-.179.012-.268l.004-.444V6.572c0-.15-.005-.299-.013-.448zm-6.423 6.764c-.24.06-.48.087-.72.087-.63 0-1.244-.196-1.788-.572a3.54 3.54 0 01-1.387-1.927 3.594 3.594 0 01.178-2.424l.005-.01c.44-.926 1.198-1.547 2.13-1.783.24-.06.48-.088.72-.088.32 0 .637.05.942.145l-.444 1.467a2.1 2.1 0 00-.498-.073c-.135 0-.27.016-.4.05-.556.14-.997.493-1.261 1.01a2.087 2.087 0 00-.103 1.406c.14.558.492.999 1.01 1.264.354.178.73.244 1.1.198l.427 1.45c-.306.053-.614.072-.91.072l.099-.072zm3.562-.956c-.5.956-1.257 1.576-2.187 1.812-.24.06-.48.087-.72.087-.63 0-1.244-.196-1.788-.572l.427-1.45c.277.13.577.196.883.196.135 0 .27-.016.4-.05.557-.14.998-.493 1.262-1.01a2.087 2.087 0 00.102-1.406 2.107 2.107 0 00-1.01-1.264 2.11 2.11 0 00-1.097-.198l-.427-1.45c.307-.052.614-.072.91-.072.63 0 1.244.197 1.789.573a3.54 3.54 0 011.387 1.927 3.594 3.594 0 01-.178 2.424l-.003.006-.75-4.54V7.37l1.56.445v7.117z"/>
  </svg>
);

const VKLogo = () => (
  <svg viewBox="0 0 24 24" fill="#0077FF" width="28" height="28">
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C5.1 11.7 4.42 9.5 4.42 9.05c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.854c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
  </svg>
);

const YandexMusicLogo = () => (
  <svg viewBox="0 0 24 24" fill="#FFCC00" width="28" height="28">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm2.399 18.503h-1.893V8.885l-3.535 9.618H7.44L3.905 8.885v9.618H2.012V5.497h2.668l3.355 9.108 3.355-9.108h2.668l.341.952v12.054z"/>
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
