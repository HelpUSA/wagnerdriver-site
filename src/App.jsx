// FILE: src/App.jsx
import React, { useMemo, useEffect } from "react";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";

// ✅ inicializa i18next (carrega src/i18n.js)
import "./i18n";
import i18n from "./i18n";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import WhatsappIcon from "./components/WhatsappIcon";

/**
 * Observa a URL e sincroniza o idioma do i18n.
 * - "/" e "/pt" => pt
 * - "/en"       => en
 * - "/es"       => es
 */
function LanguageWatcher() {
  const { pathname } = useLocation();

  const lang = useMemo(() => {
    const seg = (pathname.split("/")[1] || "").toLowerCase();
    if (seg === "en") return "en";
    if (seg === "es") return "es";
    return "pt"; // padrão
  }, [pathname]);

  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
  }, [lang]);

  return null;
}

function HomePage() {
  return (
    <>
      <LanguageWatcher />
      <Hero />
      <Sobre />
      <Servicos />   {/* ✅ seção de serviços (#servicos) */}
      {/* Gallery removido */}
      <Contato />
    </>
  );
}

function NotFound() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center text-center p-10">
      <div>
        <h1 className="text-3xl font-bold">Página não encontrada</h1>
        <p className="text-neutral-400 mt-2">
          Verifique o endereço ou volte para a página inicial.
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-5 py-3 rounded-2xl bg-accent text-black font-semibold"
        >
          Voltar ao início
        </a>
      </div>
    </div>
  );
}

// ✅ Rotas multilíngues
const router = createBrowserRouter(
  [
    { path: "/", element: <HomePage /> },
    { path: "/pt", element: <HomePage /> },
    { path: "/en", element: <HomePage /> },
    { path: "/es", element: <HomePage /> },
    { path: "*", element: <NotFound /> },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <RouterProvider router={router} />
      </main>
      <Footer />
      {/* Usa defaults: phone=+1 251 677-8489 e texto via i18n */}
      <WhatsappIcon />
    </div>
  );
}
