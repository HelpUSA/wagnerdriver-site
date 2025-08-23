// 📄 src/components/Gallery.jsx
import React from "react";

const IMAGES = [
  "/images/image01.png",
  "/images/image02.png",
  "/images/image03.png",
  "/images/image04.png",
  "/images/image05.png",
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-16 bg-neutral-950 text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
          Frota / Galeria
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {IMAGES.map((src, i) => (
            <figure
              key={src}
              className="group aspect-square overflow-hidden rounded-xl shadow-lg border border-white/10 bg-neutral-900"
            >
              <picture>
                {/* tenta .webp primeiro; se não existir, cai no .png abaixo */}
                <source srcSet={src.replace(/\.png$/i, ".webp")} type="image/webp" />
                <img
                  src={src}
                  alt={`Veículo ${i + 1} - Wagner Driver`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                  onError={(e) => {
                    // se algum arquivo faltar, esconde o card pra não quebrar o layout
                    const fig = e.currentTarget.closest("figure");
                    if (fig) fig.style.display = "none";
                  }}
                />
              </picture>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
