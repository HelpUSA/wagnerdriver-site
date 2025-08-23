// FILE: src/components/Servicos.jsx
import React from "react";

const servicos = [
  {
    nome: "Traslado para Aeroporto",
    slug: "aeroporto",
    descricao: "Transporte executivo para chegadas e partidas com pontualidade e segurança.",
    capa: "/images/image01.png",
  },
  {
    nome: "Eventos e Casamentos",
    slug: "eventos",
    descricao: "Chegue com conforto e estilo em eventos corporativos, festas e cerimônias.",
    capa: "/images/image02.png",
  },
  {
    nome: "Viagens Intermunicipais",
    slug: "viagens",
    descricao: "Viagens seguras e confortáveis entre cidades da Paraíba e estados vizinhos.",
    capa: "/images/image03.png",
  },
  {
    nome: "City Tour João Pessoa",
    slug: "city-tour",
    descricao: "Conheça os principais pontos turísticos da cidade com motorista experiente.",
    capa: "/images/image04.png",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-16 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Nossos Serviços
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicos.map((s) => (
            <div
              key={s.slug}
              className="rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/60 hover:border-accent transition group"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={s.capa}
                  alt={s.nome}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{s.nome}</h3>
                <p className="text-sm text-neutral-300 mt-1">{s.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
