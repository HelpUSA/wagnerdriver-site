// FILE: src/components/Servicos.jsx
import React from "react";

const WHATSAPP_URL =
  "https://wa.me/12516778489?text=Quero%20agendar%20um%20transporte";

const servicos = [
  {
    nome: "Traslado para Aeroporto (PNS, MOB, GPT)",
    slug: "aeroporto",
    descricao:
      "Pick-up e drop-off com monitoramento de voo e tempo de espera cortesia.",
    capa: "/images/image01.png",
  },
  {
    nome: "Eventos e Casamentos",
    slug: "eventos",
    descricao:
      "Chofer de terno, veículo higienizado e pontualidade para seus momentos especiais.",
    capa: "/images/image02.png",
  },
  {
    nome: "Longas Distâncias",
    slug: "viagens",
    descricao:
      "Viagens confortáveis para Mobile, Pensacola, Destin, New Orleans, Birmingham e região.",
    capa: "/images/image03.png",
  },
  {
    nome: "City/Beach Tour Gulf Shores",
    slug: "city-tour",
    descricao:
      "Passeios por Gulf Shores, Orange Beach, Gulf State Park, The Wharf e pontos icônicos.",
    capa: "/images/image04.png",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-16 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Nossos Serviços</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicos.map((s) => (
            <article
              key={s.slug}
              className="rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/60 hover:border-accent transition group"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-800">
                <picture>
                  <source
                    srcSet={s.capa.replace(/\.png$/i, ".webp")}
                    type="image/webp"
                  />
                  <img
                    src={s.capa}
                    alt={`${s.nome} - Wagner Driver`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      // Se a imagem faltar, esconde o card para não “quebrar” o grid
                      e.currentTarget.closest("article").style.display = "none";
                    }}
                  />
                </picture>
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
            Solicitar orçamento pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
