// FILE: src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt from "./locales/pt.json";
import en from "./locales/en.json";
import es from "./locales/es.json";

// Detecta o idioma inicial pela rota
const path = typeof window !== "undefined" ? window.location.pathname : "";
const seg = (path.split("/")[1] || "").toLowerCase();
const initialLng = seg === "en" ? "en" : seg === "es" ? "es" : "pt";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
      es: { translation: es },
    },
    lng: initialLng,            // 👈 idioma inicial pela URL
    fallbackLng: "pt",
    supportedLngs: ["pt", "en", "es"],
    interpolation: { escapeValue: false }, // 👈 permite <Trans />
    returnEmptyString: false,
    react: {
      useSuspense: false,
      // mantém tags básicas se você usar <Trans> com HTML simples
      transKeepBasicHtmlNodesFor: ["br", "strong", "i", "b", "p", "span"],
    },
  });

export default i18n;
