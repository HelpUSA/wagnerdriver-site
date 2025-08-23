// FILE: src/components/Header.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Frota / Galeria" },
  { href: "#contato", label: "Contato" },
];

const WHATSAPP_URL =
  "https://wa.me/5583987392265?text=Quero%20agendar%20uma%20corrida";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-primary/90 text-white fixed top-0 left-0 w-full z-50 shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <a href="#home" className="flex items-center space-x-3">
          <img
            src="/images/helpus-logo.png" // troque se preferir outro logo
            alt="Wagner Driver - Logo"
            className="h-10 w-10 object-contain rounded-full"
          />
          <span className="text-lg sm:text-xl font-semibold tracking-wide">
            Wagner Driver
          </span>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent transition">
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-2xl bg-accent text-black font-medium hover:opacity-90 transition"
          >
            Agendar
          </a>
        </nav>
      </div>

      {open && (
        <div className="md:hidden bg-primary/95 text-white px-4 pb-4 space-y-2 border-t border-white/10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2 hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 rounded-2xl bg-accent text-black text-center font-medium hover:opacity-90 transition"
            onClick={() => setOpen(false)}
          >
            Agendar
          </a>
        </div>
      )}
    </header>
  );
}
