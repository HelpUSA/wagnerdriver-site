// FILE: src/components/Sobre.jsx
import React from "react";

export default function Sobre() {
  return (
    <>
      {/* Sobre o Motorista */}
      <section id="sobre" className="py-16 px-6 bg-neutral-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Sobre o Wagner Driver</h2>
          <p className="text-neutral-300 text-lg">
            O Wagner Driver oferece serviços de transporte executivo em João Pessoa e região,
            com foco em conforto, segurança e pontualidade. Seja para deslocamentos diários,
            viagens intermunicipais ou transfer para aeroportos, você conta com atendimento
            exclusivo e profissional.
          </p>
          <p className="mt-4 text-neutral-400">
            Nosso objetivo é garantir que cada cliente viaje com tranquilidade,
            aproveitando uma experiência diferenciada de transporte privado.
          </p>
        </div>
      </section>

      {/* Por que escolher (AGORA DEPOIS do Sobre) */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-8">
            Por que escolher o <span className="text-yellow-600">Wagner Driver</span>?
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
              <h3 className="text-gray-900 font-semibold">Conforto e comodidade</h3>
              <p className="text-gray-600 mt-1">
                Veículos sempre limpos, climatizados e preparados para sua viagem.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
              <h3 className="text-gray-900 font-semibold">Pontualidade</h3>
              <p className="text-gray-600 mt-1">
                Chegue no horário certo para compromissos, eventos ou voos.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
              <h3 className="text-gray-900 font-semibold">Segurança</h3>
              <p className="text-gray-600 mt-1">
                Motorista experiente, trajeto monitorado e total confiança no serviço.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
