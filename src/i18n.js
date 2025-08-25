// FILE: src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt from "./locales/pt.json";
import en from "./locales/en.json";
import es from "./locales/es.json";

// Idioma inicial pela rota; padrão = en
function getInitialLang() {
  if (typeof window === "undefined") return "en";
  const seg = (window.location.pathname.split("/")[1] || "").toLowerCase();
  return seg === "pt" || seg === "en" || seg === "es" ? seg : "en";
}

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
    es: { translation: es },
  },
  lng: getInitialLang(),         // 👈 inicia pelo prefixo; sem prefixo => "en"
  fallbackLng: "en",             // 👈 fallback em inglês
  supportedLngs: ["pt", "en", "es"],
  interpolation: { escapeValue: false },
  returnEmptyString: false,
  react: {
    useSuspense: false,
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "b", "p", "span"],
  },
});

export default i18n;
