// FILE: src/components/Header.jsx
import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

function withHash(path) {
  const hash = window.location.hash || "";
  return `${path}${hash}`;
}

function useClickAway(ref, onAway) {
  useEffect(() => {
    const handler = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) onAway?.();
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [ref, onAway]);
}

export default function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: t("menu.home") },
    { href: "#servicos", label: t("menu.services") },
    { href: "#contato", label: t("menu.contact") },
  ];

  // ✅ idioma atual pela URL, default = en
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const seg = (pathname.split("/")[1] || "").toLowerCase();
  const currentLang = seg === "pt" || seg === "en" || seg === "es" ? seg : "en";

  // ---- Dropdown de idiomas (desktop) ----
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  useClickAway(langRef, () => setLangOpen(false));

  const langLabel = currentLang === "en" ? "English" : currentLang === "es" ? "Español" : "Português";

  const LangItem = ({ code, label, to }) => (
    <a
      href={withHash(to)}
      className={[
        "block px-3 py-2 rounded-md text-sm",
        currentLang === code ? "bg-white text-black font-semibold" : "hover:bg-white/10",
      ].join(" ")}
      onClick={() => setLangOpen(false)}
      aria-current={currentLang === code ? "true" : "false"}
    >
      {label}
    </a>
  );

  const whatsappUrl = `https://wa.me/12516778489?text=${encodeURIComponent(t("whatsapp.text"))}`;

  return (
    <header className="bg-primary/90 text-white fixed top-0 left-0 w-full z-50 shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <a href="#home" className="flex items-center space-x-3">
          <img
            src="/images/wagner-driver-logo.png"
            alt="Wagner Driver - Logo"
            className="h-10 w-10 object-contain rounded-full"
          />
          <span className="text-lg sm:text-xl font-semibold tracking-wide">
            Wagner Driver
          </span>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent transition">
              {l.label}
            </a>
          ))}

          {/* Popdown de idiomas */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/30 hover:bg-white/10 transition"
              aria-haspopup="menu"
              aria-expanded={langOpen ? "true" : "false"}
            >
              {langLabel} <ChevronDown size={16} className="opacity-80" />
            </button>

            {langOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-40 bg-neutral-900/95 backdrop-blur border border-white/10 rounded-xl p-1 shadow-xl"
              >
                <LangItem code="en" label="English" to="/en" />
                <LangItem code="pt" label="Português" to="/pt" />
                <LangItem code="es" label="Español" to="/es" />
              </div>
            )}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-2xl bg-accent text-black font-medium hover:opacity-90 transition"
          >
            {t("menu.schedule")}
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-primary/95 text-white px-4 pb-4 space-y-2 border-t border-white/10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2 hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}

          {/* Popdown simples para mobile */}
          <details className="pt-1">
            <summary className="cursor-pointer list-none px-2 py-2 rounded-md bg-white/10">
              {langLabel}
            </summary>
            <div className="pl-2 mt-2 flex flex-col">
              <a href={withHash("/en")} className="py-1.5" onClick={() => setOpen(false)}>
                English
              </a>
              <a href={withHash("/pt")} className="py-1.5" onClick={() => setOpen(false)}>
                Português
              </a>
              <a href={withHash("/es")} className="py-1.5" onClick={() => setOpen(false)}>
                Español
              </a>
            </div>
          </details>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 rounded-2xl bg-accent text-black text-center font-medium hover:opacity-90 transition mt-2"
            onClick={() => setOpen(false)}
          >
            {t("menu.schedule")}
          </a>
        </div>
      )}
    </header>
  );
}
