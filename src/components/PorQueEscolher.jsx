// src/components/PorQueEscolher.jsx
export default function PorQueEscolher() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Por que escolher o <span className="text-yellow-600">Wagner Driver</span>?
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="text-gray-900 font-semibold">Conforto e comodidade</h3>
            <p className="text-gray-600 mt-1">
              Veículos limpos, climatizados e preparados para sua viagem.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="text-gray-900 font-semibold">Pontualidade</h3>
            <p className="text-gray-600 mt-1">
              Chegue sempre no horário certo para compromissos, eventos ou voos.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="text-gray-900 font-semibold">Segurança</h3>
            <p className="text-gray-600 mt-1">
              Motorista experiente, trajetos monitorados e total confiança no serviço.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
