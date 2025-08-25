// FILE: src/components/Contato.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contato() {
  const { t } = useTranslation();
  const [mensagemStatus, setMensagemStatus] = useState("");

  const WA_PHONE = "12516778489"; // +1 (251) 677-8489
  const WA_TEXT = t("whatsapp.text");
  const WA_LINK = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(WA_TEXT)}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagemStatus("");
    const formData = new FormData(e.target);

    try {
      const response = await fetch("http://localhost:8000/send-email", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setMensagemStatus(t("contact.success"));
        e.target.reset();
      } else {
        setMensagemStatus(t("contact.error"));
      }
    } catch (error) {
      console.error("Erro:", error);
      setMensagemStatus(t("contact.serverError"));
    }
  };

  return (
    <section id="contato" className="pt-24 pb-12 px-4 bg-neutral-950 text-white">
      <h2 className="text-3xl font-semibold text-center mb-8">{t("contact.title")}</h2>

      <form className="max-w-xl mx-auto grid gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder={t("contact.form.name")}
          className="border border-white/20 bg-black/20 p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder={t("contact.form.email")}
          className="border border-white/20 bg-black/20 p-2 rounded"
          required
        />
        <textarea
          name="mensagem"
          placeholder={t("contact.form.message")}
          className="border border-white/20 bg-black/20 p-2 rounded"
          rows="4"
          required
        />
        <button
          type="submit"
          className="bg-accent text-black p-2 rounded hover:opacity-90 transition font-semibold"
        >
          {t("contact.form.send")}
        </button>
      </form>

      {mensagemStatus && (
        <p className="text-center text-green-400 mt-4">{mensagemStatus}</p>
      )}

      <div className="text-center mt-6 space-y-1">
        <p>
          📞 WhatsApp:{" "}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold"
          >
            +1 (251) 677-8489
          </a>
        </p>
        <p>
          📧 E-mail:{" "}
          <a
            href="mailto:wagnermrc@gmail.com"
            className="text-accent font-semibold"
          >
            wagnermrc@gmail.com
          </a>
        </p>
        <p>
          Instagram:{" "}
          <a
            href="https://www.instagram.com/wagnermedeiroscarvalho/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold"
          >
            @wagnermedeiroscarvalho
          </a>
        </p>
      </div>
    </section>
  );
}
