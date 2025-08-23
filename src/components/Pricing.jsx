// FILE: src/components/Pricing.jsx
import React from "react";

const Pricing = () => {
  return (
    <section id="precos" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Valores de Referência</h2>
      <p className="text-gray-600 mb-10">
        Os valores podem variar de acordo com distância, horário e tipo de serviço.
        Consulte para orçamento detalhado.
      </p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Traslado Aeroporto</h3>
          <p className="text-gray-500 mt-2">a partir de R$ 100</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Eventos / Casamentos</h3>
          <p className="text-gray-500 mt-2">a partir de R$ 200</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Viagens Intermunicipais</h3>
          <p className="text-gray-500 mt-2">a partir de R$ 300</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
