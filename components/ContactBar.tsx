// components/ContactBar.tsx
import Link from 'next/link';

export default function ContactBar({
  phone = '+12516778459',
  email = 'wagnermrc@gmail.com',
  locale,
}: {
  phone?: string;
  email?: string;
  locale: 'en' | 'pt' | 'es';
}) {
  const t = {
    en: { call: 'Call', email: 'Email' },
    pt: { call: 'Ligar', email: 'E-mail' },
    es: { call: 'Llamar', email: 'Correo' },
  }[locale];

  return (
    <div className="bg-white/5 border-b border-white/10">
      <div className="container mx-auto px-6 h-10 flex items-center justify-between text-sm">
        <div className="text-white/80">
          <span className="mr-4">📞 <a href={`tel:${phone}`} className="underline">{phone}</a></span>
          <span>✉️ <a href={`mailto:${email}`} className="underline">{email}</a></span>
        </div>
        <div className="hidden sm:flex gap-3">
          <a href={`tel:${phone}`} className="rounded-lg border border-white/20 px-3 py-1 hover:bg-white/10">{t.call}</a>
          <a href={`mailto:${email}`} className="rounded-lg bg-white text-black px-3 py-1">{t.email}</a>
        </div>
      </div>
    </div>
  );
}
