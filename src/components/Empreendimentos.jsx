// src/components/Empreendimentos.jsx

import React from 'react'

const imoveis = [
  {
    img: '/images/anuncio01.png',
    titulo: 'Última unidade – R$ 84.000,00',
    descricao: 'Residencial Rota do Sol, Bloco A – Apto 405. Documentação inclusa: ITBI, cartório e seguro do cliente.',
  },
  {
    img: '/images/anuncio02.png',
    titulo: 'Casa com 3 quartos – 96m²',
    descricao: 'Localizada no Jardim Oceania, João Pessoa. Excelente localização e acabamento.',
  },
  {
    img: '/images/anuncio03.png',
    titulo: 'Apartamento 2 quartos – MOBILIADO',
    descricao: '50m² no Cabo Branco, João Pessoa. Pronto para morar com vista urbana.',
  },
  {
    img: '/images/anuncio04.png',
    titulo: 'Apartamento 3 quartos – Suíte + Elevador',
    descricao: 'Imóvel moderno e funcional, ideal para família. Edifício com elevador.',
  },
]

const Empreendimentos = () => (
  <section id="empreendimentos" className="py-16 px-4 bg-gray-50">
    <h2 className="text-3xl font-semibold text-center mb-10">Empreendimentos em Destaque</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {imoveis.map((item, index) => (
        <div key={index} className="bg-white rounded shadow overflow-hidden">
          <div className="w-full h-60 bg-white flex items-center justify-center">
            <img src={item.img} alt={item.titulo} className="max-h-full object-contain" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{item.titulo}</h3>
            <p className="text-sm text-gray-700">{item.descricao}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Empreendimentos
