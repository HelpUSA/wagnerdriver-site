// src/components/Hero.jsx
import { useEffect, useRef } from "react";

export default function Hero() {
  const vidRef = useRef(null);

  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    const tryPlay = async () => {
      try {
        await v.play();
      } catch {}
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

  // scroll suave até a #servicos compensando o header fixo
  const handleScrollToServicos = (e) => {
    e.preventDefault();
    const target = document.querySelector("#servicos");
    if (!target) return;
    const header = document.querySelector("header");
    const offset = (header?.offsetHeight || 0) + 8;
    const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
    window.history.replaceState(null, "", "#servicos");
  };

  return (
    <section id="home" className="relative w-full overflow-hidden bg-black">
      <div className="relative w-full h-[clamp(560px,78vh,880px)]">
        {/* Vídeo de fundo (pode trocar por outro, ex: estrada, cidade, viagem) */}
        <video
          ref={vidRef}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/image01.png"
        >
          <source
            src="/videos/background.mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
        </video>

        {/* Camada de escurecimento */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/55 to-black/20" />

        {/* Imagem destacada (carro / motorista) */}
        <div className="absolute right-3 sm:right-6 bottom-28 lg:bottom-24 z-20 pointer-events-none">
          <img
            src="/images/image01.png"
            alt="Wagner Driver - Transporte Executivo"
            className="object-contain drop-shadow-2xl w-[34vw] max-w-[400px] min-w-[200px] lg:w-[28vw]"
          />
        </div>

        {/* Texto principal */}
        <div className="relative z-30 h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight max-w-3xl">
            Seu destino com{" "}
            <span className="text-yellow-400">conforto e segurança</span>
          </h1>
          <p className="mt-4 text-white/90 text-lg max-w-2xl">
            Transporte executivo em João Pessoa e região. Aeroportos, eventos e
            viagens com pontualidade e comodidade.
          </p>

          {/* Botões de ação */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/5583987392265"
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
