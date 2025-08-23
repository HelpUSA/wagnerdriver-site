// FILE: src/components/Hero.jsx
import { useEffect, useRef } from "react";

// ✅ WhatsApp (EUA)
const WA_PHONE = "12516778489";
const WA_TEXT  = "Quero agendar um transporte";
const WHATSAPP_URL = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(WA_TEXT)}`;

export default function Hero() {
  const vidRef = useRef(null);

  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;
    v.muted = true;
    v.setAttribute("muted", ""); // iOS
    v.playsInline = true;

    const tryPlay = async () => {
      try { await v.play(); } catch {}
    };
    tryPlay();

    const onUserInteract = () => tryPlay();
    window.addEventListener("click", onUserInteract, { once: true });
    window.addEventListener("scroll", onUserInteract, { once: true });
    return () => {
      window.removeEventListener("click", onUserInteract);
      window.removeEventListener("scroll", onUserInteract);
    };
  }, []);

  // scroll suave até #servicos (fallback #cortes), compensando header fixo
  const handleScrollToServicos = (e) => {
    e.preventDefault();
    const target =
      document.getElementById("servicos") || document.getElementById("cortes");
    if (!target) return;
    const header = document.querySelector("header");
    const offset = (header?.offsetHeight || 0) + 8;
    const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
    window.history.replaceState(null, "", `#${target.id}`);
  };

  return (
    <section id="home" className="relative w-full overflow-hidden bg-black">
      <div className="relative w-full h-[clamp(560px,78vh,880px)]">
        {/* Vídeo de fundo */}
        <video
          ref={vidRef}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/image01.png"
        >
          <source
            src="/videos/background.mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
        </video>

        {/* Camada de escurecimento */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/55 to-black/20" />

        {/* Overlay do Wagner (menor e no canto inferior-direito) */}
        <div className="absolute right-4 md:right-6 bottom-4 md:bottom-6 z-20 pointer-events-none">
          <img
            src="/images/wagner_driver_hero_overlay.png"
            alt="Wagner Driver - motorista executivo"
            className="object-contain drop-shadow-2xl w-[26vw] md:w-[22vw] max-w-[300px] md:max-w-[340px] min-w-[140px]"
            decoding="async"
          />
        </div>

        {/* Texto principal */}
        <div className="relative z-30 h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight max-w-3xl">
            Seu destino com <span className="text-yellow-400">conforto e segurança</span>
          </h1>
          <p className="mt-4 text-white/90 text-lg max-w-2xl">
            Transporte executivo em Gulf Shores (AL) e região. Aeroportos, eventos e viagens com
            pontualidade e comodidade.
          </p>

          {/* Botões de ação */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition"
            >
              Agendar corrida
            </a>

            <a
              href="#servicos"
              onClick={handleScrollToServicos}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur transition"
            >
              Nossos serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
