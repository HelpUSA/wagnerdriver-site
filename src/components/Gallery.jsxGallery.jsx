// FILE: src/components/Gallery.jsx
import React from "react";

const Gallery = () => {
  const imagens = [
    "/images/image01.png",
    "/images/image02.png",
    "/images/image03.png",
  ];

  return (
    <section id="galeria" className="py-16 bg-neutral-950 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Nossa Frota</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {imagens.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Veículo ${i + 1} - Wagner Driver`}
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
