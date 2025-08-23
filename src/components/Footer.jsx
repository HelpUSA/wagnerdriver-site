// FILE: src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 border-b border-white/20">
        {/* Coluna 1 - Contato */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Contato</h3>
          <p className="text-sm">
            Endereço:{" "}
            <span className="text-neutral-300">
              241 E 16th Avenue, Gulf Shores, AL
            </span>
          </p>
          <p className="text-sm mt-1">
            Atendimento: <span className="text-neutral-300">24 horas</span>
          </p>
          <p className="text-sm mt-2">
            📞 WhatsApp:{" "}
            <a
              href="https://wa.me/12516778489"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              +1 (251) 677-8489
            </a>
          </p>
          <p className="text-sm">📧 wagnermrc@gmail.com</p>
        </div>

        {/* Coluna 2 - Navegação */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Links rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-accent">Início</a></li>
            <li><a href="#servicos" className="hover:text-accent">Serviços</a></li>
            <li><a href="#galeria" className="hover:text-accent">Frota / Galeria</a></li>
            <li><a href="#contato" className="hover:text-accent">Contato</a></li>
          </ul>
        </div>

        {/* Coluna 3 - Redes sociais */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Siga-nos</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.instagram.com/wagnermedeiroscarvalho/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="text-center text-xs text-white/70 py-4 flex flex-col items-center">
        <img
          src="/images/wagner-driver-logo.png"
          alt="Wagner Driver logo"
          className="h-10 mb-1 rounded-full"
        />
        <span>
          Desenvolvido por{" "}
          <a
            href="https://helpusa.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            HelpUS
          </a>{" "}
          • Todos os direitos reservados
        </span>
      </div>
    </footer>
  );
}
