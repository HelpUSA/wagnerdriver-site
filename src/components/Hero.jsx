// FILE: src/components/Hero.jsx
import { useEffect, useMemo, useRef } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Phone } from "lucide-react";

const WA_PHONE = "12516778489"; // WhatsApp
const PHONE_DISPLAY = "+1 (251) 677-8489";
const TEL_LINK = `tel:+${WA_PHONE}`;

export default function Hero() {
  const { t, i18n } = useTranslation();
  const vidRef = useRef(null);

  // link do WhatsApp no idioma atual
  const WHATSAPP_URL = useMemo(() => {
    const msg = t("whatsapp.text");
    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;
    v.muted = true;
    v.setAttribute("muted", ""); // iOS
    v.playsInline = true;
    const tryPlay = async () => { try { await v.play(); } catch {} };
    tryPlay();
    const onUserInteract = () => tryPlay();
    window.addEventListener("click", onUserInteract, { once: true });
    window.addEventListener("scroll", onUserInteract, { once: true });
    return () => {
      window.removeEventListener("click", onUserInteract);
      window.removeEventListener("scroll", onUserInteract);
    };
  }, []);

  const handleScrollToServicos = (e) => {
    e.preventDefault();
    const target = document.getElementById("servicos") || document.getElementById("cortes");
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
        {/* Vídeo */}
        <video
          ref={vidRef}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          autoPlay muted loop playsInline preload="metadata"
          poster="/images/image01.png"
        >
          <source src="/videos/background.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
        </video>

        {/* Degradê geral e degradê extra no rodapé (cobre o número do vídeo) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/55 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-24 md:h-28 z-20 bg-gradient-to-t from-black/95 to-transparent" />

        {/* Card de telefone (CTA) */}
        <a
          href={TEL_LINK}
          className="group absolute left-3 bottom-3 md:left-6 md:bottom-6 z-40"
          aria-label={`${t("call.cta")} ${PHONE_DISPLAY}`}
        >
          <div className="flex items-center gap-3 rounded-2xl px-4 py-3
                          bg-white/90 text-black shadow-lg ring-1 ring-black/10 backdrop-blur
                          hover:bg-white transition">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-yellow-400 shadow-inner">
              <Phone size={18} />
            </span>
            <div className="leading-tight">
              <div className="text-xs font-semibold uppercase tracking-wide">{t("call.cta")}</div>
              <div className="text-base font-bold">{PHONE_DISPLAY}</div>
            </div>
            <span className="ml-2 hidden sm:inline text-xs px-2 py-1 rounded-full bg-black/85 text-white">
              {t("call.badge")}
            </span>
          </div>
        </a>

        {/* Overlay do Wagner */}
        <div className="absolute right-4 md:right-6 bottom-4 md:bottom-6 z-30 pointer-events-none">
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
            {/* nas traduções use <c>...</c> */}
            <Trans i18nKey="hero.title_html" components={{ c: <span className="text-yellow-400" /> }} />
          </h1>
          <p className="mt-4 text-white/90 text-lg max-w-2xl">{t("hero.subtitle")}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition"
            >
              {t("hero.book")}
            </a>
            <a
              href="#servicos"
              onClick={handleScrollToServicos}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur transition"
            >
              {t("hero.services")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
