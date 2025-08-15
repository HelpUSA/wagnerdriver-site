// app/[locale]/contact/page.tsx
import type { Locale } from '@/i18n/config';
import EmailForm from '@/components/EmailForm';
import Link from 'next/link';

const PHONE = '+12516778459';
const EMAIL = 'wagnermrc@gmail.com';

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const t = {
    en: { title: 'Contact', intro: 'Choose the best channel for you or send us a message:', call: 'Call', sms: 'SMS', wa: 'WhatsApp', email: 'Email' },
    pt: { title: 'Contato', intro: 'Escolha o melhor canal para você ou envie uma mensagem:', call: 'Ligar', sms: 'SMS', wa: 'WhatsApp', email: 'E-mail' },
    es: { title: 'Contacto', intro: 'Elige el mejor canal o envíanos un mensaje:', call: 'Llamar', sms: 'SMS', wa: 'WhatsApp', email: 'Correo' },
  }[params.locale];

  const wa = `https://wa.me/${PHONE.replace(/[^\d]/g, '')}`;

  return (
    <main className="container mx-auto px-6 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-3">{t.title}</h1>
      <p className="text-white/75 mb-8">{t.intro}</p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Canais diretos */}
        <div className="space-y-3">
          <a href={`tel:${PHONE}`} className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10">📞 {t.call}: {PHONE}</a>
          <a href={`sms:${PHONE}`} className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10">💬 {t.sms}: {PHONE}</a>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10">🟢 {t.wa}: {PHONE}</a>
          <a href={`mailto:${EMAIL}`} className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10">✉️ {t.email}: {EMAIL}</a>
        </div>

        {/* Formulário (abre e-mail do usuário) */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <EmailForm to={EMAIL} locale={params.locale} />
        </div>
      </div>

      <div className="mt-10 text-white/70 text-sm">
        <Link href={`/${params.locale}`} className="underline">← Home</Link>
      </div>
    </main>
  );
}
