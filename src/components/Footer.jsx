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
          <p className="text-sm mt-2">📞 WhatsApp: +1 (251) 677-8489</p>
          <p className="text-sm mt-1">📧 wagnermrc@gmail.com</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-lg">{t("footer.linksTitle")}</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home">{t("menu.home")}</a></li>
            <li><a href="#servicos">{t("menu.services")}</a></li>
            <li><a href="#galeria">{t("menu.gallery")}</a></li>
            <li><a href="#contato">{t("menu.contact")}</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-lg">{t("footer.follow")}</h3>
          <a href="https://www.instagram.com/wagnermedeiroscarvalho/">Instagram</a>
        </div>
      </div>

      <div className="text-center text-xs text-white/70 py-4 flex flex-col items-center">
        <img
          src="/images/wagner-driver-logo.png"
          alt="Wagner Driver logo"
          className="h-10 mb-1 rounded-full"
        />
        <span>
          {t("footer.developed")}{" "}
          <a href="https://helpusa.com.br" className="underline hover:text-white">
            HelpUS
          </a>
        </span>
      </div>
    </footer>
  );
}
