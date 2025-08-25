// FILE: src/components/Servicos.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const WHATSAPP_URL =
  "https://wa.me/12516778489?text=Quero%20agendar%20um%20transporte";

export default function Servicos() {
  const { t } = useTranslation();

  const servicos = [
    {
      nome: t("services.airport.title"),
      descricao: t("services.airport.desc"),
      capa: "/images/image01.png",
      slug: "aeroporto",
    },
    {
      nome: t("services.events.title"),
      descricao: t("services.events.desc"),
      capa: "/images/image02.png",
      slug: "eventos",
    },
    {
      nome: t("services.long.title"),
      descricao: t("services.long.desc"),
      capa: "/images/image03.png",
      slug: "viagens",
    },
    {
      nome: t("services.tour.title"),
      descricao: t("services.tour.desc"),
      capa: "/images/image04.png",
      slug: "city-tour",
    },
  ];

  return (
    <section id="servicos" className="py-16 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {t("services.sectionTitle")}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicos.map((s) => (
            <article
              key={s.slug}
              className="rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/60 hover:border-accent transition group"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-800">
                <img
                  src={s.capa}
                  alt={s.nome}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{s.nome}</h3>
                <p className="text-sm text-neutral-300 mt-1">{s.descricao}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-2xl bg-accent text-black font-semibold hover:opacity-90 transition"
          >
            {t("services.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
