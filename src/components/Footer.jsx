// FILE: src/components/Footer.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-white pt-10" id="contato">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 border-b border-white/20">
        <div>
          <h3 className="font-semibold mb-3 text-lg">{t("footer.contactTitle")}</h3>
          <p className="text-sm">{t("footer.address")}</p>
          <p className="text-sm mt-1">{t("footer.hours")}</p>

          <p className="text-sm mt-2">
            📞{" "}
            <a href="tel:+12516778489" className="underline underline-offset-2 hover:text-white">
              WhatsApp: +1 (251) 677-8489
            </a>
          </p>
          <p className="text-sm mt-1">
            📧{" "}
            <a href="mailto:wagnermrc@gmail.com" className="underline underline-offset-2 hover:text-white">
              wagnermrc@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-lg">{t("footer.linksTitle")}</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home">{t("menu.home")}</a></li>
            <li><a href="#servicos">{t("menu.services")}</a></li>
            {/* Galeria removida */}
            <li><a href="#contato">{t("menu.contact")}</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-lg">{t("footer.follow")}</h3>
          <a
            href="https://www.instagram.com/wagnermedeiroscarvalho/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* faixa inferior com a logo HelpUS */}
      <div className="text-center text-xs text-white/70 py-4 flex flex-col items-center">
        <a
          href="https://helpusa.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center"
          aria-label="HelpUS website"
        >
          <img
            src="/images/helpus-logo.png"
            alt="HelpUS logo"
            className="h-10 mb-1"
            loading="lazy"
            decoding="async"
          />
        </a>
        <span>
          {t("footer.developed")}{" "}
          <a
            href="https://helpusa.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            HelpUS
          </a>
        </span>
      </div>
    </footer>
  );
}
