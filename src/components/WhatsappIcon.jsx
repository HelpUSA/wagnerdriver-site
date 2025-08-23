// 📄 src/components/WhatsappIcon.jsx
import React from "react";

export default function WhatsappIcon({
  phone = "5583987392265",
  text = "Quero agendar uma corrida",
}) {
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      aria-label="Abrir conversa no WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.52 3.48A11.91 11.91 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.14 1.6 5.94L0 24l6.28-1.64A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22c-1.87 0-3.68-.51-5.26-1.47l-.38-.23-3.73.97 1-3.64-.25-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.5-7.36c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.29-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.88-.78-1.48-1.74-1.65-2.04-.17-.29-.02-.45.13-.6.14-.14.3-.35.45-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.19-.24-.58-.48-.5-.67-.51-.17 0-.37 0-.57 0-.2 0-.52.07-.8.37-.27.29-1.05 1.03-1.05 2.5 0 1.47 1.08 2.89 1.23 3.09.15.2 2.12 3.23 5.13 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
}
