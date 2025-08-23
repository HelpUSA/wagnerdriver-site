// 📄 src/components/Gallery.jsx
import React from "react";

const imagens = [
  "/images/image01.png",
  "/images/image02.png",
  "/images/image03.png",
  "/images/image04.png",
  "/images/image05.png",
  "/images/image06.png",
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-16 bg-black text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
          Nossa Frota
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imagens.map((src, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg shadow-lg border border-gray-700"
            >
              <img
                src={src}
                alt={`Veículo ${index + 1} - Wagner Driver`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
